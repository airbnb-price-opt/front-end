import axios from 'axios';
import { axiosWithAuth } from './AxioswithAuth';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const GET_NEIGHBORHOOD_START = 'GET_NEIGHBORHOOD_START';
export const GET_NEIGHBORHOOD_SUCCESS = 'GET_NEIGHBORHOOD_SUCCESS';
export const GET_NEIGHBORHOOD_FAIL = 'GET_NEIGHBORHOOD_FAIL';
export const GET_NEIGHBORHOOD_GROUP_START ='GET_NEIGHBORHOOD_GROUP_START';
export const GET_NEIGHBORHOOD_GROUP_SUCCESS = 'GET_NEIGHBORHOOD_GROUP_SUCCESS';
export const GET_NEIGHBORHOOD_GROUP_FAIL = 'GET_NEIGHBORHOOD_GROUP_FAIL';
export const ADD_NEIGHBORHOOD_GROUP_START = 'ADD_NEIGHBORHOOD_GROUP_START';
export const ADD_NEIGHBORHOOD_GROUP_SUCCESS = 'ADD_NEIGHBORHOOD_GROUP_SUCCESS';
export const ADD_NEIGHBORHOOD_GROUP_FAIL = 'ADD_NEIGHBORHOOD_GROUP_FAIL';

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

export const loginUser = (existingUser) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axios
        .post('https://airbnb-price-opt.herokuapp.com/oauth/token', `grant_type=password&username=${existingUser.username}&password=${existingUser.password}`, {
            headers: {
                Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
            console.log('LOGIN_USER_SUCCESS', res)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.access_token })
            localStorage.setItem('token', res.data.access_token)
        })
        .catch(err =>{
            console.log('LOGIN_USER_FAIL', err)
            dispatch({ type: LOGIN_USER_FAIL, payload: err })
        })
} 

export const getNeighborhoods = () => dispatch => {
    dispatch({ type: GET_NEIGHBORHOOD_START })
    axios
        .get('https://airbnb-price-opt.herokuapp.com/neighbourhood/all')
        .then(res => {
            console.log('GET_NEIGHBORHOOD_SUCCESS', res.data)
            dispatch({ type: GET_NEIGHBORHOOD_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('GET_NEIGHBORHOOD_FAIL', err)
            dispatch({ type: GET_NEIGHBORHOOD_FAIL, payload: err })
        })
}

export const getNeighborhoodGroups = () => dispatch => {
    dispatch({ type: GET_NEIGHBORHOOD_GROUP_START })
    axios
        .get('https://airbnb-price-opt.herokuapp.com/groups/all')
        .then(res => {
            console.log('GET_NEIGHBORHOOD_GROUPS_SUCCESS', res.data)
            dispatch({ type: GET_NEIGHBORHOOD_GROUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('GET_NEIGHBORHOOD_GROUPS_FAIL', err)
            dispatch({ type: GET_NEIGHBORHOOD_GROUP_FAIL, payload: err })
        })
}

export const addNeighborhoodGroup = (group) => dispatch => {
    dispatch({ type: ADD_NEIGHBORHOOD_GROUP_START })
    axios
        .post('https://airbnb-price-opt.herokuapp.com/groups/new', group)
        .then(res => {
            console.log('ADD_NEIGHBORHOOD_GROUP_SUCCESS', res.data)
            dispatch({ type: ADD_NEIGHBORHOOD_GROUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('ADD_NEIGHBORHOOD_GROUP_FAIL', err)
            dispatch({ type: ADD_NEIGHBORHOOD_GROUP_FAIL, payload: err })
        })
}
