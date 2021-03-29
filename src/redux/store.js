import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";
import usersReduser from "./users_reduser";
import authReduser from "./auth_reduser";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReduser,
    usersPage: usersReduser,
    auth: authReduser
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;