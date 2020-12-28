import { overviewTypes } from "./overview.types";

export const setCurrentOverview = overview => ({
    type: overviewTypes.SET_OVERVIEW_DATA,
    payload: overview
})
