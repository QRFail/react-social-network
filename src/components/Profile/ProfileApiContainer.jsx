import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile_reduser";
import {withRouter} from "react-router-dom";

class ProfileApiContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }

        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then(
            response => {
                console.log(response.data);
                this.props.setUserProfile(response.data);
            }
        );
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

export default connect(mapStateToProps, {setUserProfile})(ProfileRouterContainer);
