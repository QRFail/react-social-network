import {getAuthMe} from "./auth_reduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initial_state = {
    initialized: false
};

let appReduser = (state = initial_state, action) => {

    switch (action.type){
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }


}

export const setInitialized = () => {
    return { type: INITIALIZED_SUCCESS }
}

export const initializeApp = () => {
    return(
        (dispatch) => {
            let getAuthMePromise =  dispatch(getAuthMe());

            Promise.all([getAuthMePromise]).then( () =>{
                    dispatch(setInitialized());
                }

            )


        }
    )
}

export default appReduser;