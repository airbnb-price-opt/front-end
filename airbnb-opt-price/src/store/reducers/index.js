import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    GET_NEIGHBORHOOD_START,
    GET_NEIGHBORHOOD_SUCCESS,
    GET_NEIGHBORHOOD_FAIL,
    GET_NEIGHBORHOOD_GROUP_START,
    GET_NEIGHBORHOOD_GROUP_SUCCESS,
    GET_NEIGHBORHOOD_GROUP_FAIL,
    GET_BED_TYPES_START,
    GET_BED_TYPES_SUCCESS,
    GET_BED_TYPES_FAIL,
    GET_ROOM_TYPES_START,
    GET_ROOM_TYPES_SUCCESS,
    GET_ROOM_TYPES_FAIL
    // ADD_NEIGHBORHOOD_GROUP_START,
    // ADD_NEIGHBORHOOD_GROUP_SUCCESS,
    // ADD_NEIGHBORHOOD_GROUP_FAIL
} from '../actions';

const initialState = {
    listing: [],
    addingUser: false,
    loggingIn: false,
    getting: false,
    posting: false,
    bedTypes: [],
    roomTypes: [],
    neighborhoodGroup: [
        {
            name: "Friedrichstein",
            neighbourHood: [
            {
                name: "NeighborhoodFried",
                neighbourhood_id: 0
            },
            {
                name: "NeighborhoodRich",
                neighbourhood_id: 1
            },
            {
                name: "NeighborhoodStein",
                neighbourhood_id: 2
            }
            ],
            neighbourhood_group_id: 0
        },
        {
            name: "Lichtenstiein",
            neighbourHood: [
            {
                name: "NeighborhoodLicht",
                neighbourhood_id: 0
            },
            {
                name: "NeighborhoodTen",
                neighbourhood_id: 1
            },
            {
                name: "NeighborhoodSteiner",
                neighbourhood_id: 2
            }
            ],
            neighbourhood_group_id: 1
        },
        {
            name: "BerlinHamburn",
            neighbourHood: [
            {
                name: "NeighborhoodBer",
                neighbourhood_id: 0
            },
            {
                name: "NeighborhoodLinHam",
                neighbourhood_id: 1
            },
            {
                name: "NeighborhoodBurn",
                neighbourhood_id: 2
            }
            ],
            neighbourhood_group_id: 2
        }
    ],
}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case REGISTER_USER_START:
            console.log('REGISTER_USER_START')
            return{
                ...state,
                isAddingUser: true
            }
        case REGISTER_USER_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                addingUser: false
            }
        case REGISTER_USER_FAIL:
            return{
                ...state,
                addingUser: false
            }
        case LOGIN_USER_START:
            return{
                ...state,
                loggingIn: true
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                loggingIn: false
            }
        case LOGIN_USER_FAIL:
            return{
                ...state,
                loggingIn: false
            }
        case GET_NEIGHBORHOOD_START:
            return{
                ...state,
                getting: true
            }
        case GET_NEIGHBORHOOD_SUCCESS:
            return{
                ...state,
                getting: false,
                neighborhoods: action.payload
            }
        case GET_NEIGHBORHOOD_FAIL:
            return{
                ...state,
                getting: false
            }
        case GET_NEIGHBORHOOD_GROUP_START:
            return{
                ...state,
                getting: true
            }
        case GET_NEIGHBORHOOD_GROUP_SUCCESS:
            return{
                ...state,
                getting: false,
                neighborhoodGroups: action.payload
            }
        case GET_NEIGHBORHOOD_GROUP_FAIL:
            return{
                ...state,
                getting: false,
                neighborhoodGroups: action.payload
            }
        case GET_BED_TYPES_START:
            return{
                ...state,
                getting: true
            }
        case GET_BED_TYPES_SUCCESS:
            return{
                ...state,
                getting: false,
                bedTypes: action.payload
            }
        case GET_BED_TYPES_FAIL:
            return{
                ...state,
                getting: false,
                bedTypes: action.payload
            }
        case GET_ROOM_TYPES_START:
            return{
                ...state,
                getting: false
            }
        case GET_ROOM_TYPES_SUCCESS:
            console.log('GET_ROOM_TYPES_REDUCER', action.payload)
            return{
                ...state,
                getting: false,
                roomTypes: action.payload
            }
        case GET_ROOM_TYPES_FAIL:
            return{
                ...state,
                getting: false,
                roomTypes: action.payload
            }
        default:
            return state;
    }
}