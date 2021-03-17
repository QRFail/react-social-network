import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts(props) {


    let posts = props.posts
    let postsElement = posts.map( p => <Post message={p.message} like={p.likeCount}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( { type: 'ADD-POST' } );
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.dispatch( { type: 'UPDATE-NEW-POST-TEXT', newText: text } );
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
