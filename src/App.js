import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './header'
import { ReviewPage } from './reviewPage'
import { GasData } from './gasData'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/reviewPage" element={<ReviewPage />}/>
        <Route path="/gas" exact element={<GasData />}  /> 
      </Routes>
    </Router>
  );
}

export default App;
