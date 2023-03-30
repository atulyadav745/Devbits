import {GLOBAL_TYPES} from "./GLOBAL_TYPES" ;
import axios from "axios";
import {postDataAPI} from "../../Utils/fetchData"

const BASE_URL = "https://stock-trading-platform.onrender.com" ;
export const register = (data) => async(dispatch) => {
    const res = await postDataAPI("auth/register", data) ;
    dispatch({
        type: GLOBAL_TYPES.AUTH,
        payload: {
            token : res.data.token,
            user : res.data.user,
        }
    })
    localStorage.setItem('token', res.data.token) 
}

export const login  = (data) => async(dispatch) => {
    const res = await postDataAPI("auth/login", data) ;
    console.log("hi")
    console.log(res) ;
    console.log("hello") ;
    dispatch({
        type: GLOBAL_TYPES.AUTH,
        payload: {
            token : res.data.token,
            user : res.data.user,
        }
    })
    localStorage.setItem('token', res.data.token) 
}