import { GLOBAL_TYPES } from "./GLOBAL_TYPES";
import { postDataAPI } from "../../utils/fetchData"

export const purchaseStock = (token, data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await postDataAPIDataAPI("trade/purchase-stock", token, data);
        const data = res.data.data;
        console.log(res) 
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

export const sellStock = (token, data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await postDataAPI("trade/sell-stock", token, data);
        console.log(res) ;
        dispatch({
            type: GLOBAL_TYPES.STOCK,
            payload: {
                data: res.data
            }
        })

        // dispatch({ type: GLOBAL_TYPES.ALERT, payload: { message: "Registered Sucessfully" } })
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}