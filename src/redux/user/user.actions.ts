import { firebaseUserInterface } from 'core/types/firebaseInterface';
import { setCurrentUserInterface } from 'core/types/redux.types';

import { userActionTypes } from "./user.types";

export const setCurrentUser = (user: firebaseUserInterface): setCurrentUserInterface => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})
