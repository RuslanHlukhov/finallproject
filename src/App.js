import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navbar';
import Games from './components/Games';
import Films from './components/Films';
import Books from './components/Books'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <>
  <Router>
  <Navibar />
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/games" element={<Games/>}/>
    <Route exact path="/films" element={<Films/>}/>
    <Route exact path="/books" element={<Books/>}/>
  </Routes>
  </Router>
  </>
  
  );
}

export default App;
