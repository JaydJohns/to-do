import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" exact element={<div>Home</div>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;