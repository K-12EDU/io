import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Classroom from './pages/Classroom';
import Assessments from './pages/Assessments';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/classroom' element={<Classroom />} />
        <Route path='/assessments' element={<Assessments />} />
      </Routes>
    </Router>
  );
}
