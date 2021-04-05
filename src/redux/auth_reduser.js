import {AuthApi} from "../api/apiSamurai";
import {stopSubmit} from "redux-form";

const SET_USER_INFO = 'SET_USER_INFO';

let initial_state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

let authReduser = (state = initial_state, action) => {

    switch (action.type){
        case SET_USER_INFO:

            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }


}

export const setUserInfo = (userId, email, login, isAuth) => {
    return { type: SET_USER_INFO , payload:{userId, email, login, isAuth}}
}

export const getAuthMe = () => {
    return(
        (dispatch) => {
            return AuthApi.me().then(
                data => {
                    if(data.resultCode === 0){
                        let {email, id, login} = data.data;
                        dispatch(setUserInfo(id, email, login, true));

                    }

                }
            );
        }
    )
}

export const login = (email, password, rememberMe) => {
    return(
        (dispatch) => {
            AuthApi.login(email, password, rememberMe).then(
                data => {
                    if(data.resultCode === 0){
                        dispatch(getAuthMe())
                    } else {
                        dispatch(stopSubmit('loginForm',  {_error: data.messages.length > 0 ? data.messages[0] :'other error' }));
                    }

                }
            );
        }
    )
}

export const logout = (email, password, rememberMe) => {
    return(
        (dispatch) => {
            AuthApi.logout().then(
                data => {
                    if(data.resultCode === 0){
                        dispatch(setUserInfo(null, null, null, false));
                    }

                }
            );
        }
    )
}

export default authReduser;