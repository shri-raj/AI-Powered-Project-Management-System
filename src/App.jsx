import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SprintsPage from './pages/Sprint_section'
import Task_dashboard from './pages/Task_dashboard'
import Bugs_queue_section from './pages/Bugs_queue_section'
import RetrospectiveComponent from './pages/Retrospective'
import './index.css';


function App() {
    return (
        <Router>
          <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/sprintspage" element={<SprintsPage/>} />
          <Route path="/taskdashboard" element={<Task_dashboard/>} />
          <Route path="/bugsqueue" element={<Bugs_queue_section/>} />
          <Route path="/retrospective" element={<RetrospectiveComponent/>} />
          </Routes>
          </Router>
          
      );
  
}

export default App
