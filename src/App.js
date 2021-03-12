import './App.css';
import Header from "./components/Header/Header";
import Navnar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navnar/>
        <Profile/>
    </div>
  );
}

export default App;
