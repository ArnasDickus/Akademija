import { createSelector } from "reselect";

const selectData = state => state.value;

export const selectOverviewData = createSelector(
    [selectData],
    (data) => data
)

