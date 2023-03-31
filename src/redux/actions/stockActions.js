import { GLOBAL_TYPES } from "./GLOBAL_TYPES";
import axios from "axios";
import { getDataAPI } from "../../utils/fetchData"

export const stockDetails = (token) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await getDataAPI("stock/stocks-data", token);
        const data = res.data.data;
        dispatch({
            type: GLOBAL_TYPES.STOCK,
            payload: {
                data: data
            }
        })

        // dispatch({ type: GLOBAL_TYPES.ALERT, payload: { message: "Registered Sucessfully" } })
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}

export const portfolioDetails = (token) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await getDataAPI("stock/user-portfolio", token);
        console.log(res) ;
        // dispatch({
        //     type: GLOBAL_TYPES.STOCK,
        //     payload: {
        //         data: data
        //     }
        // })

        // dispatch({ type: GLOBAL_TYPES.ALERT, payload: { message: "Registered Sucessfully" } })
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}