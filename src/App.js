
import './App.css';
import Nav from "../src/components/nav/Nav"
import {Route,Routes} from "react-router-dom"
import Login from './components/login/Login';
import Home from './components/home/Home';
import Sell from "./components/sell/Sell"
import Trade from "./components/trade/Trade"
import Buy from './components/buy/Buy';
import Stock from './components/stock/Stock'
import Order from './components/orders/Order';
import Register from './components/register/Register';
function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>

       <Route path="/" element={<Home/>} />
       <Route path="/Login" element={<Login/>} />
       <Route path="/sell" element={<Sell/>} />
       <Route path="/trade" element={<Trade/>} />
       <Route path="/Buy" element={<Buy/>} />
       <Route path="/Stock" element={<Stock/>} />
       <Route path="/Order" element={<Order/>} />
       <Route path="/Register" element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
