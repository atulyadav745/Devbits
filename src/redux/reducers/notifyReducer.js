import { GLOBAL_TYPES } from "../actions/GLOBAL_TYPES";

const initialState = {} ;

const notifyReducer = (state = initialState, action) => {
    switch(action.type){
        case GLOBAL_TYPES.NOTIFY:
            return action.payload ;
        default:
            return state ;
    }
}

export default notifyReducer ;