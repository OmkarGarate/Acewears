import React from 'react';
import './css/home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
   <>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      
    </Routes>
  </Router>
   </>
  );
}

export default App;
