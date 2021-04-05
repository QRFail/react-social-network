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
                        message: action.message
                    }
                ],
                newMessageText: '',
            }




        default:
            return state;
    }
}

export const addMessageCreator = (message) => {
    return {type: ADD_MESSAGE, message}
}



export default dialogsReduser;