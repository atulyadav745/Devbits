import { GLOBAL_TYPES } from "../actions/GLOBAL_TYPES";

const initialState = {} ;

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case GLOBAL_TYPES.AUTH:
            return action.payload ;
        default:
            return state ;
    }
}

export default authReducer ;