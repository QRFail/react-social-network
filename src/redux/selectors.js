import {createSelector} from "reselect";

export const getUserSelector = (state) => {
    return state.usersPage.users;
}

export const getUserSuperSelector = createSelector(getUserSelector, (users) => {
    return users.filter( u => true)
});
