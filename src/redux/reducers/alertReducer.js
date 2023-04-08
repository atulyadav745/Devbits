import { GLOBAL_TYPES } from "../actions/GLOBAL_TYPES";

const initialState = {} ;

const alertReducer = (state = initialState, action) => {
    switch(action.type){
        case GLOBAL_TYPES.ALERT:
            return action.payload ;
        default:
            return state ;
    }
}

export default alertReducer ;