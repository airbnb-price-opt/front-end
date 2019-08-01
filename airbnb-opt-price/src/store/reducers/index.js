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
    GET_ROOM_TYPES_FAIL,
    GET_CANCELLATION_TYPES_START,
    GET_CANCELLATION_TYPES_SUCCESS,
    GET_CANCELLATION_TYPES_FAIL,
    GET_LISTINGS_START,
    GET_LISTINGS_SUCCESS,
    GET_LISTINGS_FAIL,
    ADD_LISTING_START,
    ADD_LISTING_SUCCESS,
    ADD_LISTING_FAIL,
    UPDATE_LISTING_START,
    UPDATE_LISTING_SUCCESS,
    UPDATE_LISTING_FAIL
} from '../actions';

const initialState = {
    listings: [],
    getting: false,
    posting: false,
    putting: false,
    deleting: false,
    bedTypes: [],
    roomTypes: [],
    cancellationTypes: [],
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
                posting: true
            }
        case REGISTER_USER_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                posting: false
            }
        case REGISTER_USER_FAIL:
            return{
                ...state,
                posting: false
            }
        case LOGIN_USER_START:
            return{
                ...state,
                posting: true
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                posting: false
            }
        case LOGIN_USER_FAIL:
            return{
                ...state,
                posting: false
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
                getting: true
            }
        case GET_ROOM_TYPES_SUCCESS:
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
        case GET_CANCELLATION_TYPES_START:
            return{
                ...state,
                getting: true
            }
        case GET_CANCELLATION_TYPES_SUCCESS:
            return{
                ...state,
                getting: false,
                cancellationTypes: action.payload
            }
        case GET_CANCELLATION_TYPES_FAIL:
            return{
                ...state,
                getting: false,
                cancellationTypes: action.payload
            }
        case GET_LISTINGS_START:
            return{
                ...state,
                getting: true
            }
        case GET_LISTINGS_SUCCESS:
            return{
                ...state,
                getting: false,
                listings: action.payload
            }
        case GET_LISTINGS_FAIL:
            return{
                ...state,
                getting: false,
                listings: action.payload
            }
        case ADD_LISTING_START:
            return{
                ...state,
                posting: true
            }
        case ADD_LISTING_SUCCESS:
            console.log('ADD_LISTING_REDUCER', action.payload)
            return{
                ...state,
                posting: false,
                listings: [...state.listings, action.payload]
            }
        case ADD_LISTING_FAIL:
            return{
                ...state,
                posting: false,
                listings: [...state.listings, action.payload]
            }
        case UPDATE_LISTING_START:
            return{
                ...state,
                putting: true
            }
        case UPDATE_LISTING_SUCCESS:
            console.log('UPDATE_LISTING_REDUCER', action.payload)
            return{
                ...state,
                putting: false,
                listings: state.listings.map(home => {
                    if(home.listing_id === action.payload.id) {
                        return action.payload;
                    }else{
                        return home;
                    }
                })
            }
        case UPDATE_LISTING_FAIL:
            return{
                ...state,
                putting: false,
                listings: 
            }
        default:
            return state;
    }
}