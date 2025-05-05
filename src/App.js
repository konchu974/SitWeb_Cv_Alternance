import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Galery from './components/Galery';
import Projet from './components/Projects';
import ScrollToSection from './components/scrollToSection'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToSection /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Galery />} />
          <Route path="/project" element={<Projet />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;