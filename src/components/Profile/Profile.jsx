import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    console.log(props);

    return (
        <div>
            <ProfileInfo profileInfo={props.profileInfo} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
