import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar, {isLogin} from './components/Navbar';
import Games from './components/Games';
import Films from './components/Films';
import Books from './components/Books/Books.js'
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Post from './components/Post/Post';
import Login from './components/Login';


function App() {
  return (
  <>
  <Router>
  <Navibar />
  <Routes>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/games" element={<Games/>}/>
    <Route exact path="/films" element={<Films/>}/>
    <Route exact path="/books" element={<Books/>}/>
    <Route exact path="/post" element={<Post/>} />
    <Route exact path="/login" element={<Login />} />
  </Routes>
  </Router>
  </>
  
  );
}

export default App;
