import { userActionTypes } from "./user.types";


// Add default state.
const INITIAL_STATE = {
    currentUser: null
}

// Get's state from redux store, whenever action fires.
// If state is undefined add null.
const userReducer = (state = INITIAL_STATE.currentUser, action) => {
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
