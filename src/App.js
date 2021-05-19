import React from "react";
import Home from './routeComponents/Home.js';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div>
      <Navigation/>

      <Home/>

      <Footer/>
    </div>
  );
}

export default App;
