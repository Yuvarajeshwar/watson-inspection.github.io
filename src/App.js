// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReviewPage } from './reviewPage'; // Import your components for different pages
import { GasData } from './gasData';
import { selectedGridRowsCountSelector } from '@mui/x-data-grid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reviewPage" element={<ReviewPage />}/> {/* Define routes and their components */}
        <Route path="/gas" exact element={<GasData />}  /> {/* Define routes and their components */}
      </Routes>
    </Router>
  );
}

export default App;
