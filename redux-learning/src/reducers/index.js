import counterReducer from './counter';
import loggedReducer from './IsLoged';
import {combineReducers } from 'redux';

const allReducer=combineReducers({
    counterReducer,
    loggedReducer
})

export default allReducer;
