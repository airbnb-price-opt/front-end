import axios from 'axios';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const registerUser = (newUserObj) => dispatch => {
    dispatch({ type: REGISTER_USER_START })
    axios
        .post('http://localhost:5000/api/auth/register', newUserObj)
        .then(res => {
            console.log('REGISTER_USER_SUCCESS', res)
            dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data })
        })
        .catch(err =>{
            console.log('REGISTER_USER_FAIL', err)
            dispatch({ type: REGISTER_USER_FAIL, payload: err })
        })
} 

export const loginUser = (existingUserObj) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axios
        .post('http://localhost:5000/api/auth/login', existingUserObj)
        .then(res => {
            console.log('LOGIN_USER_SUCCESS', res)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data })
            localStorage.setItem('token', res.data.token)
        })
        .catch(err =>{
            console.log('LOGIN_USER_FAIL', err)
            dispatch({ type: LOGIN_USER_FAIL, payload: err })
        })
} 