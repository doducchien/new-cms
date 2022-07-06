import { notification } from "antd";
import { apiService } from "./api-service"

 const login = async (data)=>{
    try{
        const res = await apiService.post("/authen/login", data);
        return res;

    }catch(error){
        notification.error({
            message: 'Login Failure',
            description: error?.message || "",
            placement: 'topLeft'
        })
        throw error;
    }
}

const getDetailAdmin = async (data)=>{
    try{
        const res = await apiService.post("/authen/profile", data);
        return res;

    }catch(error){
        notification.error({
            message: 'Faild',
            description: error?.message || "",
            placement: 'topLeft'
        })
        throw error;
    }
}

const updateProfileAdmin = async (data)=>{
    try{
        const res = await apiService.put("/authen/profile", data);
        notification.success({
            message: 'Update Profile success',
            description: res?.message || "",
            placement: 'topLeft'
        })
        return res;

    }catch(error){
        notification.error({
            message: 'Faild',
            description: error?.message || "",
            placement: 'topLeft'
        })
        throw error;
    }
}


export const authenService = {login, getDetailAdmin, updateProfileAdmin};