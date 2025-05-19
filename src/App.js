
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Classroom from './pages/Classroom';
import Assessments from './pages/Assessments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/assessments" element={<Assessments />} />
      </Routes>
    </Router>
  );
}

export default App;
