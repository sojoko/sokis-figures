import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Index } from './layouts/Index';
import { FiguresSolid } from './layouts/FiguresSolid';
import { FiguresFlats } from './layouts/FiguresFlats';
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
      <Routes>
         <Route path = "/" element={<Index/>}  />
         <Route path = "/solidas" element={<FiguresSolid/>}  />
         <Route path = "/planas" element={<FiguresFlats/>}  />
      </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
