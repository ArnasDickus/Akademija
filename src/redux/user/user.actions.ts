import { userActionTypes, ReduxCurrentUserType, FirebaseUserType } from "./user.types";

export const setCurrentUser = (user: FirebaseUserType): ReduxCurrentUserType => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})
