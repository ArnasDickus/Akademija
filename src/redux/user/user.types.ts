export const userActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export type FirebaseUserType = {
    currentUser: null | unknown;
} 

export type ReduxCurrentUserType = {
    type: typeof userActionTypes.SET_CURRENT_USER
    payload: FirebaseUserType
}


