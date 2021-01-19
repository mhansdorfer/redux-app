import usersReducer from './users/store';
import uiReducer from './ui/store';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    users: usersReducer,
    ui: uiReducer
});

export default rootReducer;
