import './App.css';
import Header from "./components/header/header";
import Navnar from "./components/navbar/navbar";
import Profile from "./components/content/profile";


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
