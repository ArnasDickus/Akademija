import { firebaseUserInterface } from 'core/interfaces/firebaseInterface';
import { setCurrentUserInterface } from 'core/interfaces/redux.interface';

import { userActionTypes } from "./user.types";

export const setCurrentUser = (user: firebaseUserInterface): setCurrentUserInterface => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})
