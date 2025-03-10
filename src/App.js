import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FinalUpdatedData from './views/finalUpdatedData/FinalUpdatedData';
import Home from './views/home/Home';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finalUpdatedData" element={<FinalUpdatedData />} />
      </Routes>
    </Router>
  )
}

export default App