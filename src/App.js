import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Galery from './components/Galery'; // Assurez-vous que le composant Gallery est créé
import './App.css';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Galery />} /> {/* Route vers la galerie */}
        </Routes>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
