import s from './ProfileInfo.module.css'
import userImage from '../../../assets/profile/userProfileImage.png'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

function ProfileInfo(props) {

    if(props.profileInfo == null){
        return(
            <div></div>
        )
    }

    return (
        <div>
            <div>
                <img src={props.profileInfo.photos.small ?? userImage} alt=""/>
            </div>
            <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>

        </div>
    );
}

export default ProfileInfo;
