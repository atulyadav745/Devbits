import { GLOBAL_TYPES } from "./GLOBAL_TYPES";
import axios from "axios";
import { postDataAPI } from "../../utils/fetchData"


export const register = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await postDataAPI("auth/register", data);

        dispatch({
            type: GLOBAL_TYPES.AUTH,
            payload: {
                token: res.data.token,
                user: res.data.user,
            }
        })

        localStorage.setItem('token', res.data.token)

        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { message: "Registered Sucessfully" } })
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })

    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}

export const login = (data) => async (dispatch) => {


    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await postDataAPI("auth/login", data);
        dispatch({
            type: GLOBAL_TYPES.AUTH,
            payload: {
                token: res.data.token,
                user: res.data.user,
            }
        })
        localStorage.setItem('token', res.data.token)
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { message: "Logged In Sucessfully" } })
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })

    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}