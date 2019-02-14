import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pictureReducer from './pictureReducer';
import postListReducer from './postListReducer';

export default combineReducers({
    auth: authReducer,
    pictureForm: pictureReducer,
    postlist: postListReducer
});