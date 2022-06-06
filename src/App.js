import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';
import Home from './Home/Home';
import Pathfind from './Pathfinding Components/Pathfind.js';
import Sorting from './Sorting Components/Sorting';

function App() {
  return (
  <Router>
    <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/pathfind' element={<Pathfind/>}/>
    <Route  path='/sorting' element={<Sorting/>}/>
    </Routes>
  </Router>

  );
}

export default App;
