import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Report from './Pages/Report/Report';
import Bar1 from './Components/charts/Bar/Bar';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <>
   
      <Sidebar>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Product />} />
          <Route path="/about" element={<Report/>} />
          
       
        </Routes>
      </Sidebar>
      </>
 
  );
};

export default App;