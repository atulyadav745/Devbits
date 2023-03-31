import { GLOBAL_TYPES } from "../actions/GLOBAL_TYPES";

const initialState = {} ;

const tradeReducer = (state = initialState, action) => {
    switch(action.type){
        case GLOBAL_TYPES.TRADE:
            return action.payload ;
        default:
            return state ;
    }
}

export default tradeReducer ;