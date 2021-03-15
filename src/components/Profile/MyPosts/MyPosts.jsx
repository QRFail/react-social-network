import s from './MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts(props) {

    let posts = props.posts

    let postsElement = posts.map( p => <Post message={p.message} like={p.likeCount}/> )
    return (
        <div>
            <div className={s.newMessage}>
                <div><textarea></textarea></div>
                <div><button>Send</button></div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;
