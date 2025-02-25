import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Info from './Info';
import Contact from './Contact'; // Create this component
import Projects from './Projects'; // Create this component
import AboutMe from './AboutMe';
import AnimatedBackground from './AnimatedBackground';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='relative min-h-screen flex items-center justify-center'>
        <AnimatedBackground />
      
    <Router>
      <div className='relative'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Info/>} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
