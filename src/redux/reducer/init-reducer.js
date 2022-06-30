import { INIT } from "../type/init"

const initState = {
    data: ''
}

const initReducer = (state = initState, action)=>{
    switch(action.type){
        case INIT:{
            return {
                ...state,
                data: 'initial'
            }
        }
        default:{
            return state;
        }
    }
}

export default initReducer