import "./App.css";
import React, { Component } from "react";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/contact';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
