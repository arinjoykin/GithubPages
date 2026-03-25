import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './pages/HelloWorld';
import PrivetMir from './pages/PrivetMir';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Hello World</Link>
          <Link to="/privet-mir">Привет Мир</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/privet-mir" element={<PrivetMir />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;