import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GLOBAL_TYPES } from "../../redux/actions/GLOBAL_TYPES";
import Loading from "../Loading/loading"
import Toast from "./Toast";

const Notify = () => {
    const notify = useSelector(state => state.notifyReducer);
    const alert = useSelector(state => state.alertReducer);

    const dispatch = useDispatch()

    return (
        <>
            {notify?.loading && <Loading />}
            {
                alert?.type == "success"
                &&
                <Toast msg={{ title: 'Success', body: alert?.message }}
                    handleShow={() => dispatch({ type: GLOBAL_TYPES.ALERT, payload: {} })}
                    bgColor="bg-green-600" />
            }
            {
                alert?.type == "failure"
                &&
                <Toast msg={{ title: 'Error', body: alert?.message }}
                    handleShow={() => dispatch({ type: GLOBAL_TYPES.ALERT, payload: {} })}
                    bgColor="bg-red-600" />
            }
        </>
    )
}

export default Notify;