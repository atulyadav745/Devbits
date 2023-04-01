import { GLOBAL_TYPES } from "../actions/GLOBAL_TYPES";

const initialState = {} ;

const stockReducer = (state = initialState, action) => {
    switch(action.type){
        case GLOBAL_TYPES.PORTFOLIO:
            return action.payload ;
        default:
            return state ;
    }
}


export default stockReducer ;