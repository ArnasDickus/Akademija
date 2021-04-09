import { FirebaseUserType, ReduxCurrentUserType, userActionTypes } from './user.types';

const INITIAL_STATE: FirebaseUserType = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action: ReduxCurrentUserType): FirebaseUserType => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
