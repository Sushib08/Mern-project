import {combineReducers} from 'redux';
import postReducer from './post.reducer';
import userReducer from './user.reducer';
import usersReducer from './users.reducer'

export default combineReducers({
    userReducer,
    usersReducer,
    postReducer
})