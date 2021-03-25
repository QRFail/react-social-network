const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initial_state = {
    dialogs: [
        {id: 2, name: "Tata"},
        {id: 3, name: "Uata"},
        {id: 4, name: "Vata"},
        {id: 5, name: "Sata"},
        {id: 6, name: "Xata"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi-hi"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Hi"},
        {id: 5, message: "Yo"}
    ],
    newMessageText: ''
};

let dialogsReduser = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: state.messages.length + 1,
                        message: state.newMessageText
                    }
                ],
                newMessageText: '',
            }


        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };


        default:
            return state;
    }
}

export const addMessageCreator = () => {
    return {type: ADD_MESSAGE}
}

export const updateNewMessageTextCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReduser;