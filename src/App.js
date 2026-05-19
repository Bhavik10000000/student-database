import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Project from './Project';
import { Routes, Route } from 'react-router-dom'; // Added Route here

function App() {
  return (
    <><Navbar />
    <div style={{ padding:'0px 20px' }}>
      
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/project" element={<Project />} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;
