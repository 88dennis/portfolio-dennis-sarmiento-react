import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import ModalPage from "./pages/ModalPage"
import TestPage from "./pages/TestPage"
// import logo from './logo.svg'; //from original file
import './App.css'; //from original file

function App() {
  return (
    <div className="App">
    <Router basename = {process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/ModalPage" component={ModalPage} />
          <Route exact path="/TestPage" component={TestPage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
