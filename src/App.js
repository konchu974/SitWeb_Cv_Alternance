import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Galery from './components/Galery'; 
import Projet from './components/Projects';
import './App.css';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Galery />} />
          <Route path="/projet" element={<Projet />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
