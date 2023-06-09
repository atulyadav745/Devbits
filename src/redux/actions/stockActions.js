import { GLOBAL_TYPES } from "./GLOBAL_TYPES";
import axios from "axios";
import { getDataAPI } from "../../utils/fetchData"

export const stockDetails = (token) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
        const res = await getDataAPI("stock/stocks-data", token);
        const data = res.data.data;
        dispatch({
            type: GLOBAL_TYPES.STOCK,
            payload: {
                data: data
            }
        })
    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}

export const infoUser = (token) => async (dispatch) => {
    try {
        if (token) {
            const res = await getDataAPI("auth/info", token);
            dispatch({
                type: GLOBAL_TYPES.AUTH, payload: {
                    token: token,
                    user: res.data.user
                }
            })
        }
    } catch (error) {
    }
}

export const customStockDetails = (token, data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
        let ticker = "IBM";
        let timeDuration = "Weekely";
        if (data.ticker) {
            ticker = data.ticker
        }
        if (data.timeDuration) {
            timeDuration = data.timeDuration
        }
        const res = await getDataAPI(`stock/stocksData?symbol=${ticker}&timeDuration=${timeDuration}`, token);
    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}