import { createSelector } from "reselect";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectData = (state: {data: any; }) => state;

export const selectOverviewData = createSelector(
    [selectData],
    (data) => data
)

