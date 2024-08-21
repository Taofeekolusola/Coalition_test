//import axios from 'axios'
import { FETCH_USERS_REQUEST, 
FETCH_USERS_SUCCESS, 
FETCH_USERS_FAILURE }
from './UserType.js'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
               ...state,
                loading: true,
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            return {
               ...state,
                loading: false,
                error: '',
                users: action.payload
            }
        case FETCH_USERS_FAILURE:
            return {
               ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;