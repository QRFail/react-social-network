const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let profileReduser = (state, action) => {

    switch (action.type){
        case ADD_POST:
            let m = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            }

            state.posts.push(m);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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

export default profileReduser;