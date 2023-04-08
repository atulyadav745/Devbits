import { GLOBAL_TYPES } from "./GLOBAL_TYPES";
import axios from "axios";
import { getDataAPI, postDataAPI } from "../../utils/fetchData"


export const register = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await postDataAPI("auth/register", data);
        console.log(res.data);
        if (res.data.status == 200) {
            dispatch({
                type: GLOBAL_TYPES.AUTH,
                payload: {
                    token: res.data.token,
                    user: res.data.user,
                }
            })
            dispatch({ type: GLOBAL_TYPES.ALERT, payload: { type: "success", message: res.data.message } })
        }
        else {
            dispatch({ type: GLOBAL_TYPES.ALERT, payload: { type: "failure", message: res.data.message } })
        }
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })

    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { type: "failure", message: "Some Error Occured" } })
    }
}

export const login = (data) => async (dispatch) => {


    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await postDataAPI("auth/login", data);

        if (res.data.status == 200) {
            dispatch({
                type: GLOBAL_TYPES.AUTH,
                payload: {
                    token: res.data.token,
                    user: res.data.user,
                }
            })
            dispatch({ type: GLOBAL_TYPES.ALERT, payload: { type: "success", message: res.data.message } })
        }
        else {
            dispatch({ type: GLOBAL_TYPES.ALERT, payload: { type: "failure", message: res.data.message } })
        }
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })

    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { type: "failure", message: "Some Error Occured" } })
    }
}


export const googleLogin = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await postDataAPI("auth/google-login", data);
        dispatch({
            type: GLOBAL_TYPES.AUTH,
            payload: {
                token: res.data.token_1,
                user: res.data.user,
            }
        })
        localStorage.setItem('token', res.data.token)
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { message: "Logged In Sucessfully" } })
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })

    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { type: "failure", message: "Some Error Occured" } })
    }

}

