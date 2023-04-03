import { GLOBAL_TYPES } from "./GLOBAL_TYPES";
import { postDataAPI } from "../../utils/fetchData"
import { useNavigate } from "react-router-dom";

export const purchaseStock = (token, data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: true } })
        const res = await postDataAPI("trade/purchase-stock", data, token);
        const output_data = res.data ;
        console.log(output_data) ;
        dispatch({
            type: GLOBAL_TYPES.TRADE,
            payload: {
                data: output_data
            }
        })
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
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
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.NOTIFY, payload: { loading: false } })
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}