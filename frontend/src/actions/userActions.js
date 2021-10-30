import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../constants/userConstants';

import { useState, useDisptach } from 'react';
import axios from 'axios';


export const registerUser = (userInfo) => (useState, useDispatch) => {
  const data = useState(userInfo);
  try{
    useDispatch({type: USER_REGISTER_REQUEST, payload: data});
    axios.post(`/api/users/${userId}`);
    if(data){
      useDispatch({type: USER_REGISTER_SUCCESS, payload: data});
    }
  } catch {
    useDispatch({type: USER_REGISTER_FAIL, payload: console.error("Form did not submit")});
  }

}