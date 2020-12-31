import {CoursesType} from 'core/types/categories.types';
import {ReduxOverviewType} from 'core/types/redux.types';

import { overviewTypes } from "./overview.types";

type OverviewDataType = {overviewData: CoursesType | null};

const INITIAL_STATE: OverviewDataType = {
    overviewData: null
}

const overviewReducer = (state = INITIAL_STATE, action: ReduxOverviewType): OverviewDataType => {
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
