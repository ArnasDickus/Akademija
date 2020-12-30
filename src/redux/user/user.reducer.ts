import {firebaseUserInterface} from 'core/types/firebaseInterface';
import { setCurrentUserInterface } from 'core/types/redux.types';
import { userActionTypes } from "./user.types";

const INITIAL_STATE: firebaseUserInterface = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action: setCurrentUserInterface): firebaseUserInterface => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}


export default userReducer;
