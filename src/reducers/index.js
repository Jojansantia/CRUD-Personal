import { combineReducers } from 'redux';
import personalReducer from './personalReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    personal: personalReducer,
    alerta: alertaReducer
});