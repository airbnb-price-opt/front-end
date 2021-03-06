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
export const GET_BED_TYPES_START = 'GET_BED_TYPES_START';
export const GET_BED_TYPES_SUCCESS = 'GET_BED_TYPES_SUCCESS';
export const GET_BED_TYPES_FAIL = 'GET_BED_TYPES_FAIL';
export const GET_ROOM_TYPES_START = 'GET_ROOM_TYPES_START';
export const GET_ROOM_TYPES_SUCCESS = 'GET_ROOM_TYPES_SUCCESS';
export const GET_ROOM_TYPES_FAIL = 'GET_ROOM_TYPES_FAIL';
export const GET_CANCELLATION_TYPES_START = 'GET_CANCELLATION_TYPES_START';
export const GET_CANCELLATION_TYPES_SUCCESS = 'GET_CANCELLATION_TYPES_SUCCESS';
export const GET_CANCELLATION_TYPES_FAIL = 'GET_CANCELLATION_TYPES_FAIL';
export const GET_LISTINGS_START = 'GET_LISTINGS_START';
export const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS';
export const GET_LISTINGS_FAIL = 'GET_LISTINGS_FAIL';
export const ADD_LISTING_START = 'ADD_LISTING_START';
export const ADD_LISTING_SUCCESS = 'ADD_LISTING_SUCCESS';
export const ADD_LISTING_FAIL = 'ADD_LISTING_FAIL';
export const UPDATE_LISTING_START = 'UPDATE_LISTING_START';
export const UPDATE_LISTING_SUCCESS = 'UPDATE_LISTING_SUCCESS';
export const UPDATE_LISTING_FAIL = 'UPDATE_LISTING_FAIL';
export const GET_PROPERTY_TYPES_START = 'GET_PROPERTY_TYPES_START';
export const GET_PROPERTY_TYPES_SUCCESS = 'GET_PROPERTY_TYPES_SUCCESS';
export const GET_PROPERTY_TYPES_FAIL = 'GET_PROPERTY_TYPES_FAIL';
export const DELETE_LISTING_START = 'DELETE_LISTING_START';
export const DELETE_LISTING_SUCCESS = 'DELETE_LISTING_SUCCESS';
export const DELETE_LISTING_FAIL = 'DELETE_LISTING_FAIL';


export const registerUser = (newUserObj) => dispatch => {
    dispatch({ type: REGISTER_USER_START })
    axios
        .post('http://localhost:5000/api/auth/register', newUserObj)
        .then(res => {
            dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data })
        })
        .catch(err =>{
            dispatch({ type: REGISTER_USER_FAIL, payload: err })
        })
} 

export const loginUser = (existingUser, history, setLoggedIn) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axios
        .post('https://airbnb-price-opt.herokuapp.com/oauth/token', `grant_type=password&username=${existingUser.username}&password=${existingUser.password}`, {
            headers: {
                Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.access_token })
            localStorage.setItem('token', res.data.access_token)
            setLoggedIn(true)
        })
        .then(res =>{
            history.push('/your-listings')
        })
        .catch(err =>{
            dispatch({ type: LOGIN_USER_FAIL, payload: err })
            return false
        })
} 

export const getNeighborhoods = () => dispatch => {
    dispatch({ type: GET_NEIGHBORHOOD_START })
    axios
        .get('https://airbnb-price-opt.herokuapp.com/neighbourhood/all')
        .then(res => {
            dispatch({ type: GET_NEIGHBORHOOD_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_NEIGHBORHOOD_FAIL, payload: err })
        })
}

export const getNeighborhoodGroups = () => dispatch => {
    dispatch({ type: GET_NEIGHBORHOOD_GROUP_START })
    axios
        .get('https://airbnb-price-opt.herokuapp.com/groups/all')
        .then(res => {
            dispatch({ type: GET_NEIGHBORHOOD_GROUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_NEIGHBORHOOD_GROUP_FAIL, payload: err })
        })
}

export const getBedTypes = () => dispatch => {
    dispatch({ type: GET_BED_TYPES_START })
    axiosWithAuth()
        .get('https://airbnb-price-opt.herokuapp.com/beds/all')
        .then(res => {
            dispatch({ type: GET_BED_TYPES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_BED_TYPES_FAIL, payload: err })
        })
}

export const getRoomTypes = () => dispatch => {
    dispatch({ type: GET_ROOM_TYPES_START })
    axiosWithAuth()
        .get('https://airbnb-price-opt.herokuapp.com/rooms/all')
        .then(res => {
            dispatch({ type: GET_ROOM_TYPES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_ROOM_TYPES_FAIL, payload: err })
        })
}

export const getPropertyTypes = () => dispatch => {
    dispatch({ type: GET_PROPERTY_TYPES_START })
    axiosWithAuth()
        .get('https://airbnb-price-opt.herokuapp.com/properties/all')
        .then(res => {
            dispatch({ type: GET_PROPERTY_TYPES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_PROPERTY_TYPES_FAIL, payload: err })
        })
}

export const getCancellationTypes = () => dispatch => {
    dispatch({ type: GET_CANCELLATION_TYPES_START })
    axiosWithAuth()
        .get('https://airbnb-price-opt.herokuapp.com/cancellations/all')
        .then(res => {
            dispatch({ type: GET_CANCELLATION_TYPES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_CANCELLATION_TYPES_FAIL, payload: err })
        })
}


export const getListings = () => dispatch => {
    dispatch({ type: GET_LISTINGS_START })
    axiosWithAuth()
        .get('https://airbnb-price-opt.herokuapp.com/listings/all')
        .then(res => {
            dispatch({ type: GET_LISTINGS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_LISTINGS_FAIL, payload: err })
        })
}


export const addListing = (newListingObj, history) => dispatch => {
    dispatch({ type: ADD_LISTING_START })
    axiosWithAuth()
        .post('https://airbnb-price-opt.herokuapp.com/listings/new', newListingObj)
        .then(res => {
            dispatch({ type: ADD_LISTING_SUCCESS, payload: res.data })
        })
        .then(res => {
            history.push('/your-listings')
        })
        .catch(err => {
            dispatch({ type: ADD_LISTING_FAIL, payload: err })
        })
}

export const updateListing = (updateListingObj, id, history) => dispatch => {
    dispatch({ type: UPDATE_LISTING_START })
    axiosWithAuth()
        .put(`https://airbnb-price-opt.herokuapp.com/listings/update/${id}`, updateListingObj)
        .then(res => {
            dispatch({ type: UPDATE_LISTING_SUCCESS, payload: res.data })
            history.push('/your-listings')
        })
        .catch(err => {
            dispatch({ type: UPDATE_LISTING_FAIL, payload: err })
        })
}


export const deleteListing = (listingToDelete, id, history) => dispatch => {
    dispatch({ type: DELETE_LISTING_START })
    axiosWithAuth()
        .delete(`https://airbnb-price-opt.herokuapp.com/listings/delete/${id}`, listingToDelete)
        .then(res => {
            dispatch({ type: DELETE_LISTING_SUCCESS, payload: res.data })
            history.push('/your-listings')
        })
        .catch(err => {
            dispatch({ type: DELETE_LISTING_FAIL, payload: err })
        })
}