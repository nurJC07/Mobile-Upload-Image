import firebase from '@firebase/app';
import '@firebase/database';

import {
    POSTING_UPDATE,
    POSTING_CREATE,
    GETLIST_SUCCESS
} from './types'

export const pictureUpdate = (prop, value) => {
    return {
        type: POSTING_UPDATE,
        payload: { prop, value }
    };
};

export const pictureCreate = (data) => {
    
    return (dispatch) => {
        firebase.database().ref(`/users/poto`)
        .push(data)
        .then(() => {
            dispatch({ type: POSTING_CREATE });
        });
    };
}

export const getListPicture = () => {
    return (dispatch) => {
        firebase.database().ref('/users/poto')
        .on('value', snapshot => {
            dispatch({ 
                type: GETLIST_SUCCESS, 
                payload: snapshot.val()
            });
        });
        
    };
};

