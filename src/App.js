
import './App.css';
import Nav from "../src/components/nav/Nav"
import {Route,Routes} from "react-router-dom"
import Login from './components/login/Login';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>

       <Route path="/Login" element={<Login/>} />
       <Route path="/home" element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
