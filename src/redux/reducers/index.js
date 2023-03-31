import { combineReducers } from '@reduxjs/toolkit';
import auth from './authReducer';
import notifyReducer from './notifyReducer';
import stockReduer from "./stockReducer"


export const rootReducer =  combineReducers({
    auth, 
    notifyReducer,
    stockReduer
}) 