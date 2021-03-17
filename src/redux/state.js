import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";


let store = {
    state: {
        dialogsPage:{
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Post 1', likeCount: 1},
                {id: 2, message: 'Post 2', likeCount: 4},
                {id: 3, message: 'Post 3', likeCount: 8},
                {id: 4, message: 'Post 4', likeCount: 1}
            ],
            newPostText: ''
        }
    },
    getState() {
        return this.state;
    },
    renderReactDom(){

    },
    subscribe(observer) {
        this.renderReactDom = observer;
    },

    dispatch(action) {

        this.state.profilePage = profileReduser(this.state.profilePage, action);
        this.state.dialogsPage = dialogsReduser(this.state.dialogsPage, action);

        this.renderReactDom(this.state);

    }

}



export default store;