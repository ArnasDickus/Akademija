import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import overviewReducer from "./overview/overview.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    overview: overviewReducer
})

export default rootReducer;
