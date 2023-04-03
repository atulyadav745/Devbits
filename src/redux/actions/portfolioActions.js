import { GLOBAL_TYPES } from "./GLOBAL_TYPES";
import axios from "axios";
import { getDataAPI } from "../../utils/fetchData"



export const portfolioDetails = (token) => async (dispatch) => {
    try {
        const res = await getDataAPI("stock/user-portfolio", token);
        dispatch({
            type: GLOBAL_TYPES.PORTFOLIO,
            payload: {
                data: res.data
            }
        })
    } catch (error) {
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { error: "Some Error Occured" } })
    }
}