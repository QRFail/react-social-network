import s from './ProfileInfo.module.css'
import userImage from '../../../assets/profile/userProfileImage.png'

function ProfileInfo(props) {

    if(props.profileInfo == null){
        return(
            <div></div>
        )
    }

    return (
        <div>
            <div>
                <img src="https://astv.ru/content/NewsImage/e1/36/e136124a-54d3-4ebd-8f87-54c0f68afda1_1.jpg" alt=""/>
            </div>
            <div>
                <img src={props.profileInfo.photos.small ?? userImage} alt=""/>
            </div>

        </div>
    );
}

export default ProfileInfo;
