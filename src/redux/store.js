import {combineReducers, createStore} from "redux";
import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";
import usersReduser from "./users_reduser";

let redusers = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReduser,
    usersPage: usersReduser,
})

let store = createStore(redusers);

export default store;