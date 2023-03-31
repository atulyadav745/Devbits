import { combineReducers } from '@reduxjs/toolkit';
import auth from './authReducer';
import notifyReducer from './notifyReducer';
import stockReduer from "./stockReducer"
import tickerReducer from "./tickerReducer"
import tradeReducer from "./tradeReducer"


export const rootReducer =  combineReducers({
    auth, 
    notifyReducer,
    stockReduer,
    tradeReducer,
    tickerReducer
}) 