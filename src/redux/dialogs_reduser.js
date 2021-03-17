const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let dialogsReduser = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let m = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }

            state.messages.push(m);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => {
    return { type: ADD_MESSAGE }
}

export const updateNewMessageTextCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default dialogsReduser;