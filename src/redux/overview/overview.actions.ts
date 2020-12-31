import {CoursesType} from 'core/types/categories.types';
import {ReduxOverviewType} from 'core/types/redux.types';

import { overviewTypes } from "./overview.types";


export const setCurrentOverview = (overview: CoursesType): ReduxOverviewType => ({
    type: overviewTypes.SET_OVERVIEW_DATA,
    payload: overview
})
