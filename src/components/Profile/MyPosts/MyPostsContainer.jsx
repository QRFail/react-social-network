import React from "react";
import {addPostActionCreator, updateNewPosrTextActionCreator} from "../../../redux/profile_reduser";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch( addPostActionCreator() );
        },
        updateNewPostText: (text) => {
            dispatch( updateNewPosrTextActionCreator(text));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
