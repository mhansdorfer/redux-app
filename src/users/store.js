import axios from "axios";

const USERS_ACTION = {    
    RESET: "users/USERS_RESET",
    ADD: "users/USER_ADD",
    FETCH_REQUESTED: 'users/FETCH_REQUESTED',
    FETCH_FAILED: 'users/FETCH_FAILED',
    FETCH_LOADED: "users/USERS_LOADED"
}

const INITIAL_STATE = {
    list: [],
    isLoading: false,
    isError: false,
    error: ""
}

const fetchRequested = () => ({type: USERS_ACTION.FETCH_REQUESTED});
const fetchFailed = (err) => ({type: USERS_ACTION.FETCH_FAILED, payload: err});
const fetchLoaded = (users) => ({type: USERS_ACTION.FETCH_LOADED, payload: users});
const add = (users) => ({type: USERS_ACTION.ADD, payload: users[0]});
const resetUsers = () => ({type: USERS_ACTION.RESET});

const fetchUsers = (fetchSucceded) => {
    return function(dispatch){
        dispatch(fetchRequested());
        axios.get("https://randomuser.me/api?results=10")
        .then((response) => {
            dispatch(fetchSucceded(response.data.results));
        })
        .catch(error => {
            dispatch(fetchFailed(error.message));
        });
    }
}

const loadUsers = () => {
    return fetchUsers(fetchLoaded);
}

const addUser = () => {
    return fetchUsers(add);
}

export default function usersReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case USERS_ACTION.ADD: 
            return {
                ...state,
                isError: false,
                isLoading: false,
                list: [...state.list, action.payload]
            };
        case USERS_ACTION.RESET:
            return {
                ...state,
                list: [],
                isError: false,
                isLoading: false
            };
        case USERS_ACTION.FETCH_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case USERS_ACTION.FETCH_LOADED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                list: action.payload
            }
        case USERS_ACTION.FETCH_FAILED: 
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload
            }
        default:
            return state;
    }
}

export {loadUsers, addUser, resetUsers};