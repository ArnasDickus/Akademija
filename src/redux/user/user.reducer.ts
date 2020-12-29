import {firebaseUserInterface} from 'core/interfaces/firebaseInterface';
import { setCurrentUserInterface } from 'core/interfaces/redux.interface';
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
