import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className = "App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
    </div>
  ); 
}

export default App;
