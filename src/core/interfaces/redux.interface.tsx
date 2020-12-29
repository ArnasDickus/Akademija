import { userActionTypes } from 'redux/user/user.types';
import {firebaseUserInterface} from 'core/interfaces/firebaseInterface';

export type setCurrentUserInterface = {
    type: typeof userActionTypes.SET_CURRENT_USER
    payload: firebaseUserInterface
}