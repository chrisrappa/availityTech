import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../constants/userConstants';

import axios from 'axios';
import Cookie from 'js-cookie';


export const registerUser = (firstName, lastName, npiNumber, businessAddress, phoneNumber, email) => async (dispatch)  => {
  dispatch({type: USER_REGISTER_REQUEST, payload: (firstName, lastName, npiNumber, businessAddress, phoneNumber, email)})
  try{
    const {data} = await axios.post('/api/users/register', {firstName, lastName, npiNumber, businessAddress, phoneNumber, email})
    dispatch({type: USER_REGISTER_SUCCESS, payload: data});
    if(data){
      dispatch({type: USER_REGISTER_SUCCESS, payload: data});
      Cookie.set('userInfo', JSON.stringify(data));
      console.log("User successfully registered");
    }
  } catch (error) {
    dispatch({type: USER_REGISTER_FAIL, payload: error.message});
  }

}