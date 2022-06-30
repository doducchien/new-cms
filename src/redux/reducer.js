import { combineReducers } from "redux";
import authenReducer from "./reducer/authen-reducer";
import initReducer from "./reducer/init-reducer";

const reducer = combineReducers({
    init: initReducer,
    authen: authenReducer
})

export default reducer;