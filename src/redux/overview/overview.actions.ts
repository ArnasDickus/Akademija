import {CoursesType} from 'core/types/categories.types';

import { overviewTypes, ReduxOverviewType } from "./overview.types";


export const setCurrentOverview = (overview: CoursesType): ReduxOverviewType => ({
    type: overviewTypes.SET_OVERVIEW_DATA,
    payload: overview
})
