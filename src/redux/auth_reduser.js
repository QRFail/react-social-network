import {AuthApi} from "../api/apiSamurai";

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
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }


}

export const setUserInfo = (userId, email, login) => {
    return { type: SET_USER_INFO , data:{userId, email, login}}
}

export const getAuthMe = () => {
    return(
        (dispatch) => {
            AuthApi.me().then(
                data => {
                    if(data.resultCode === 0){
                        let {email, id, login} = data.data;
                        dispatch(setUserInfo(id, email, login));
                    }

                }
            );
        }
    )
}

export default authReduser;