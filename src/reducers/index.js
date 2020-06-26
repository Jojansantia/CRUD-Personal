import { combineReducers } from 'redux';
import personalReducer from './personalReducer';
export default combineReducers({
    personal: personalReducer
});