import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPosrTextActionCreator} from "../../../redux/profile_reduser";


function MyPosts(props) {


    let posts = props.posts
    let postsElement = posts.map( p => <Post message={p.message} like={p.likeCount}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.dispatch( updateNewPosrTextActionCreator(text));
    }

    return (
        <div>
            <div className={s.newMessage}>
                <div>
                    <textarea onChange={updateNewPostText} ref={newPostElement} value={props.newPostText}>

                    </textarea>
                </div>
                <div><button onClick={addPost}>Send</button></div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;
