import {ProfileApi, UserApi} from "../api/apiSamurai";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initial_state = {
    posts: [
        {id: 1, message: 'Post 1', likeCount: 1},
        {id: 2, message: 'Post 2', likeCount: 4},
        {id: 3, message: 'Post 3', likeCount: 8},
        {id: 4, message: 'Post 4', likeCount: 1}
    ],
    newPostText: '',
    profileInfo: null,
    status: ''
};

let profileReduser = (state = initial_state, action) => {

    switch (action.type){
        case ADD_POST:

            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length + 1,
                        message: action.newPostMessage,
                        likeCount: 0
                    }
                ],
                newPostText: '',
            }



        case SET_USER_PROFILE:

            return {
                ...state,
                profileInfo: action.profileInfo
            }

        case SET_USER_STATUS:

            return {
                ...state,
                status: action.status
            }


        default:
            return state;
    }


}

export const addPostActionCreator = (newPostMessage) => {
    return { type: ADD_POST, newPostMessage}
}


export const setUserProfile = (profileInfo) => {
    return { type: SET_USER_PROFILE, profileInfo: profileInfo }
}
export const setUserStatus = (status) => {
    return { type: SET_USER_STATUS, status }
}

export const getProfile = (userId) =>{
    return(
        (dispatch) => {
            UserApi.getProfile(userId).then(
                data => {
                    dispatch(setUserProfile(data));
                }
            );
        }
    )
}

export const getStatus = (userId) =>{
    return(
        (dispatch) => {
            ProfileApi.getStatus(userId).then(
                data => {
                    dispatch(setUserStatus(data));
                }
            );
        }
    )
}

export const updateStatus = (status) =>{
    return(
        (dispatch) => {
            ProfileApi.setStatus(status).then(
                data => {
                    if(data.resultCode === 0){
                        dispatch(setUserStatus(status));
                    }

                }
            );
        }
    )
}

export default profileReduser;