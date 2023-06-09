import { GLOBAL_TYPES } from "../actions/GLOBAL_TYPES";

const initialState = {} ;

const tickerReducer = (state = initialState, action) => {
    switch(action.type){
        case GLOBAL_TYPES.TICKER:
            return action.payload ;
        default:
            return state ;
    }
}

export default tickerReducer ;