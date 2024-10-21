import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <About />
      <Contact />
    </div>
  );
}

export default App;
