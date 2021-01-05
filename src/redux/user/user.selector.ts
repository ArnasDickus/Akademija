import { createSelector } from 'reselect';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectUser = (state: { user: any; }) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);


