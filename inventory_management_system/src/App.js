import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/public/Login";
import Main from "./components/public/Main";
import Signup from "./components/public/Signup";
import Free from "./components/public/Free";
import Dashboard from './components/public/Dashboard';
import Product from './components/public/Product';
import Update from './components/public/Update';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Dashboard />} /> 
        <Route path="/login" element={<Login />}/>
        <Route path="/Main" element={<Main />}/>
        <Route path = "/Signup" element = {<Signup/>}/>
        <Route path = "/Free" element = {<Free/>}/>
        <Route path = "/Dashboard" element = {<Dashboard/>}/>
        <Route path = "/Product" element = {<Product/>}/>
        <Route path = "/Update" element = {<Update/>}/>
      </Routes>
    </Router>
  );
}
export default App;


