import { LOGIN_SUCCESS } from "../type/authen-type"

const initState = {
    user: ''
}



const authenReducer = (state = initState, action)=>{
    console.log("payload", action.payload)

    switch(action.type){
        case LOGIN_SUCCESS:{
            return {
                ...state,
                user: action.payload
            }
        }
        default: return state;
    }
}

export default authenReducer;