import './App.css';
import Header from "./components/Header/Header";
import Navnar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileApiContainer from "./components/Profile/ProfileApiContainer";


function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
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

              </div>

          </div>
      </BrowserRouter>

  );
}

export default App;
