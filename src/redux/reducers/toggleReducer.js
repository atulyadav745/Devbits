import { GLOBAL_TYPES } from "../actions/GLOBAL_TYPES";

const initialState = [{toggle: "hidden"}] ;

const toggleReducer = (state = initialState, action) => {
    switch(action.type){
        case GLOBAL_TYPES.TOGGLE:
            return action.payload ;
        default:
            return state ;
    }
}

export default toggleReducer ;