import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions';

const initialState = {
    listing: [],
    addingUser: false,
    loggingIn: false

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
        default:
            return state;
    }
}