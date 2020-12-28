import { overviewTypes } from "./overview.types";

const INITIAL_STATE = {
    overviewData: null
}

const overviewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case overviewTypes.SET_OVERVIEW_DATA:
            return {
                ...state,
                overviewData: action.payload
            }

        default:
            return state;
    }
}


export default overviewReducer;
