const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initial_state = {
    posts: [
        {id: 1, message: 'Post 1', likeCount: 1},
        {id: 2, message: 'Post 2', likeCount: 4},
        {id: 3, message: 'Post 3', likeCount: 8},
        {id: 4, message: 'Post 4', likeCount: 1}
    ],
    newPostText: '',
    profileInfo: null
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
                        message: state.newPostText,
                        likeCount: 0
                    }
                ],
                newPostText: '',
            }


        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:

            return {
                ...state,
                profileInfo: action.profileInfo
            }


        default:
            return state;
    }


}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updateNewPosrTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const setUserProfile = (profileInfo) => {
    return { type: SET_USER_PROFILE, profileInfo: profileInfo }
}

export default profileReduser;