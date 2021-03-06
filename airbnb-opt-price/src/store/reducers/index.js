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
    UPDATE_LISTING_FAIL,
    GET_PROPERTY_TYPES_START,
    GET_PROPERTY_TYPES_SUCCESS,
    GET_PROPERTY_TYPES_FAIL,
    DELETE_LISTING_START,
    DELETE_LISTING_SUCCESS,
    DELETE_LISTING_FAIL
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
    propertyTypes: [],
    neighborhoodGroup: [],

}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case REGISTER_USER_START:
            return{
                ...state,
                posting: true
            }
        case REGISTER_USER_SUCCESS:
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
                neighborhoodGroup: action.payload
            }
        case GET_NEIGHBORHOOD_GROUP_FAIL:
            return{
                ...state,
                getting: false,
                neighborhoodGroup: action.payload
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
            return{
                ...state,
                posting: false,
                listings: [...state.listings, action.payload]
            }
        case ADD_LISTING_FAIL:
            return{
                ...state,
                posting: false,
                listings: state.listings
            }
        case UPDATE_LISTING_START:
            return{
                ...state,
                putting: true
            }
        case UPDATE_LISTING_SUCCESS:
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
                listings: state.listings
        }
        case GET_PROPERTY_TYPES_START:
            return{
                ...state,
                getting: true
            }
        case GET_PROPERTY_TYPES_SUCCESS:
            return{
                ...state,
                getting: false,
                propertyTypes: action.payload
            }
        case GET_PROPERTY_TYPES_FAIL:
            return{
                ...state,
                getting: false,
                propertyTypes: state.propertyTypes
            }
        case DELETE_LISTING_START:
            return{
                ...state,
                getting: true
            }
        case DELETE_LISTING_SUCCESS:
            return{
                ...state,
                getting: false,
                listing: state.listings.map(home => {
                    if(home.listing_id !== action.payload.id) {
                        return home;
                    }
                })
            }
        case DELETE_LISTING_FAIL:
            return{
                ...state,
                getting: false,
                listings: state.listings
            }
        default:
            return state;
    }
}