import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Home from './Home/Home';
import Pathfind from './Pathfinding Components/Pathfind.js';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/pathfind' element={<Pathfind/>}/>
    </Routes>
  </Router>

  );
}

export default App;
