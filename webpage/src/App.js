import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './Components/Sidebar'
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Comment from "./pages/Comment.jsx";
import Analytics from "./pages/Analytics.jsx";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home";

const App = () => {
  return (
  <BrowserRouter>
  <Sidebar>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/leave-portal" element={<Comment/>}/>
    <Route path="/salary" element={<Analytics/>}/>
    <Route path="/contact" element={<Product/>}/>
  </Routes>
  </Sidebar>
  </BrowserRouter>
    )
};

export default App;