import axios from "axios"


const axiosInstance = axios.create({
    baseURL: 'http://localhost:9999'
})

axiosInstance.interceptors.response.use(function(res){
    return {
        status: res.status,
        ...res.data
    }
}, function(error){
    return Promise.reject({
        status: error.response.status,
        message: error.response.data.message,
        data: error.response.data.data
    });
})



const get = (path, data) => {
    if(data){
        const query = new URLSearchParams(data).toString();
        path = `${path}?${query}`;
    }
    return axiosInstance.get(path)
}


const post = (path, data)=>{
    console.log("data", data)
    return axiosInstance.post(path, data);
}

const put = (path, data)=>{
    return axiosInstance.put(path, data);
}

const remove = (path)=>{
    return axiosInstance.delete(path);
}
export const apiService = {
    get, post, put, remove
}