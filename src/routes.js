// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReviewPage } from './reviewPage'; // Import your components for different pages
import { GasData } from './gasData';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/reviewPage" exact component={ReviewPage} /> {/* Define routes and their components */}
        <Route path="/" exact component={GasData} /> {/* Define routes and their components */}
      </Switch>
    </Router>
  );
}

export default App;
