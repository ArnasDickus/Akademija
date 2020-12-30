import { FirebaseUserType } from 'core/types/firebase.types';
import { ReduxCurrentUserType } from 'core/types/redux.types';

import { userActionTypes } from "./user.types";

export const setCurrentUser = (user: FirebaseUserType): ReduxCurrentUserType => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})
