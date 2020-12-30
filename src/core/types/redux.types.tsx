import { userActionTypes } from 'redux/user/user.types';
import {FirebaseUserType} from 'core/types/firebase.types';

export type CurrentUserType = {
    type: typeof userActionTypes.SET_CURRENT_USER
    payload: firebaseUserType
}