import React from "react";
import Home from './components/routeComponents/Home.js';
import About from './components/routeComponents/About.js';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import {HashRouter, Route} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Footer/>
    </HashRouter>
  );
}

export default App;
