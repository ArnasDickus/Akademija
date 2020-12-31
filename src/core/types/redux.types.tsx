import { userActionTypes } from 'redux/user/user.types';
import { overviewTypes} from 'redux/overview/overview.types';
import {FirebaseUserType} from 'core/types/firebase.types';
import {CoursesType} from 'core/types/categories.types';

export type ReduxCurrentUserType = {
    type: typeof userActionTypes.SET_CURRENT_USER
    payload: FirebaseUserType
}

export type ReduxOverviewType = {
    type: typeof overviewTypes.SET_OVERVIEW_DATA,
    payload: CoursesType
}