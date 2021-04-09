import { combineReducers } from 'redux';

import overviewReducer from './overview/overview.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  overview: overviewReducer,
});

export default rootReducer;
