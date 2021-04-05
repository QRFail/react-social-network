import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthMe, logout, setUserInfo} from "../../redux/auth_reduser";

class HeaderApiContainer extends React.Component{

    render(){
        //console.log(this.props);
        return(
            <Header  {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return({
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    })
}

export default connect(mapStateToProps, { setUserInfo, logout})(HeaderApiContainer);