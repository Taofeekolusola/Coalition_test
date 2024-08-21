import axios from 'axios'
import { FETCH_USERS_REQUEST, 
FETCH_USERS_SUCCESS, 
FETCH_USERS_FAILURE }
from './UserType.js'

const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST
})

const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
})


const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error
})

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchUsersFailure(errorMessage))
        })
    } 
}