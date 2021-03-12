import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.content}>
            <div>
                ava
            </div>
            <div className={s.posts}>
                <Post message="Post 1" like="1"/>
                <Post message="Post 2" like="5"/>
                <Post message="Post 3" like="10"/>
            </div>
        </div>
    );
}

export default MyPosts;
