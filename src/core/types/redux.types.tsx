import { userActionTypes } from 'redux/user/user.types';
import {FirebaseUserType} from 'core/types/firebase.types';

export type ReduxCurrentUserType = {
    type: typeof userActionTypes.SET_CURRENT_USER
    payload: FirebaseUserType
}