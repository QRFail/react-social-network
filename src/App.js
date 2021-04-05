import './App.css';
import Navnar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileApiContainer from "./components/Profile/ProfileApiContainer";
import HeaderApiContainer from "./components/Header/HeaderApiContainer";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {getAuthMe} from "./redux/auth_reduser";
import Preloader from "./components/Preloaders/preloader";
import {initializeApp} from "./redux/app_reduser";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render(){

        if(!this.props.initialized){
            return(
                <Preloader/>
            )
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderApiContainer/>
                    <Navnar/>
                    <div className="app-wrapper-content">

                        <Route path='/profile/:userId?'
                               render={ () =>  <ProfileApiContainer/> }/>
                        <Route path='/dialogs'
                               render={ () =>  <DialogsContainer/> }/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={Login}/>

                    </div>

                </div>
            </BrowserRouter>

        );
    }

}

const mapStateToProps = (state) => {
    return({
        initialized: state.app.initialized
    })
}

export default connect(mapStateToProps, { getAuthMe, initializeApp })(App);
