import React from 'react'
import Home from './pages/Home';
import Publication from './pages/Publication';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/form' element={<Publication/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
