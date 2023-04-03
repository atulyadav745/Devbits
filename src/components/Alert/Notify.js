import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { GLOBAL_TYPES } from "../../redux/actions/GLOBAL_TYPES";
import Loading from "../Loading/loading"
// import Toast from "./Toast";

const Notify = () => {
    const notify = useSelector(state => state.notifyReducer);
    const dispatch = useDispatch()

    return (
        <>
            {notify?.loading && <Loading />}
        </>
    )
}

export default Notify;