import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import ModalPage from "./pages/ModalPage"
import TestPage from "./pages/TestPage"
import AboutMePage from "./pages/AboutMePage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"


// import logo from './logo.svg'; //from original file
import './App.css'; //from original file

function App() {
  return (
    <div className="App">
    <Router basename = {process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/AboutMePage" component={AboutMePage} />
          <Route exact path="/PortfolioPage" component={PortfolioPage} />
          <Route exact path="/ContactPage" component={ContactPage} />
          <Route exact path="/ModalPage" component={ModalPage} />
          
          <Route exact path="/TestPage" component={TestPage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
