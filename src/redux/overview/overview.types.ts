import {CoursesType} from 'core/types/categories.types';

export const overviewTypes = {
    GET_OVERVIEW_DATA: 'GET_OVERVIEW_DATA',
    SET_OVERVIEW_DATA: 'SET_OVERVIEW_DATA'
}

export type ReduxOverviewType = {
    type: typeof overviewTypes.SET_OVERVIEW_DATA,
    payload: CoursesType
}

export type CurrentUserType = {
    displayName: string;
    email: string;
}
