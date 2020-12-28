import { createSelector } from "reselect";

const selectData = state => state.overview;

export const selectOverviewData = createSelector(
    [selectData],
    (data) => data
)

