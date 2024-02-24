import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Register from './Components/Register';
import About from './Components/About';
// import './App.css'; // You can create this file to add styles
import Loader from './Components/Loader';
import { useState, useEffect,useRef } from 'react';
import clickSoundSrc from '../src/assets/sound.mp3';
import Music from './Components/Music';
import sound2 from './assets/sound2.mp3';
function App() {
  useEffect(() => {
    const clickHandler = () => {
      const audio = new Audio(clickSoundSrc);
      audio.play();
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []); 
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  const audioRef = useRef(null);

  return (
    <div className='glass-container'>
     
        <div className='glass-content'>
        {loading ? (
        <Loader /> // Show loader if loading state is true
      ) : (
      
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      
    </Router>
    )}
        </div>
    </div>
  );
}

export default App;
