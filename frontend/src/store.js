import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { userRegisterReducer } from './reducers/userReducers';

const userInfo = null;

const initialState = {
  
  userSignin: { userInfo }

};

const reducer = combineReducers({
  userRegister: userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;