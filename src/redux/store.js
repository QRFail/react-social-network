import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";
import usersReduser from "./users_reduser";
import authReduser from "./auth_reduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReduser from "./app_reduser";

let reducers = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;