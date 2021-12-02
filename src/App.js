import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Games from "./components/Games/Games";
import Films from "./components/Films/Films";
import Books from "./components/Books/Books.js";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post/Post";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/films" element={<Films />} />
        <Route path="/books" element={<Books />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
