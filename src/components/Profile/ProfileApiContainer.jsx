import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, setUserProfile} from "../../redux/profile_reduser";
import {withRouter} from "react-router-dom";
import {UserApi} from "../../api/apiSamurai";

class ProfileApiContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }

        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile { ...this.props}/>
        )


    }


}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

let ProfileRouterContainer = withRouter(ProfileApiContainer);

export default connect(mapStateToProps, {setUserProfile, getProfile})(ProfileRouterContainer);
