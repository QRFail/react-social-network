import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, setUserProfile, setUserStatus, updateStatus} from "../../redux/profile_reduser";
import {withRouter} from "react-router-dom";
import {UserApi} from "../../api/apiSamurai";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";

class ProfileApiContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId){
            //userId = 16209;
            userId = this.props.userId;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile { ...this.props}/>
        )


    }


}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}


export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileApiContainer);
