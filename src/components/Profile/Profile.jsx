import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div>
                <img src="https://astv.ru/content/NewsImage/e1/36/e136124a-54d3-4ebd-8f87-54c0f68afda1_1.jpg" alt=""/>
            </div>
            <MyPosts/>

        </div>
    );
}

export default Profile;
