import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import layoutReducer from './layout.reducer';

const reducers = () => combineReducers({
    authReducer,
    layoutReducer
}); 

export default reducers;