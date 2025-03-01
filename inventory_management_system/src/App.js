import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/public/Login";
import Main from "./components/public/Main";
import Register from "./components/public/Register";
import Free from "./components/public/Free";
import Inventory from './components/public/Inventory';
import Product from './components/public/Product';
import Update from './components/public/Update';
import Profile from './components/public/Profile';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inventory/>}/> 
        <Route path="/login" element={<Login />}/>
        <Route path="/main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/free" element={<Free />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/product" element={<Product />} />
        <Route path="/update" element={<Update />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
