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
            ]
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
        if(action.type === 'ADD-POST'){
            let m = {
                id: this.state.profilePage.posts.length + 1,
                message: this.state.profilePage.newPostText,
                likeCount: 0
            }

            this.state.profilePage.posts.push(m);
            this.state.profilePage.newPostText = '';
            this.renderReactDom(this.state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this.state.profilePage.newPostText = action.newText;
            this.renderReactDom(this.state);
        }
    }

}

export default store;