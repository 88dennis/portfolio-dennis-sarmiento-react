import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
// import logo from './logo.svg'; //from original file
import './App.css'; //from original file

function App() {
  return (
    <div className="App">
    <Router basename = {process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/HomePage" component={HomePage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
