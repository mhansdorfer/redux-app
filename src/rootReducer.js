import usersReducer from './users/store';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    users: usersReducer
});

export default rootReducer;
