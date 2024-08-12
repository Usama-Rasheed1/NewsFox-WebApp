import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Router>
      <div>
        <Navbar/>

        <Routes>

          <Route exact path="/" element={<News category="." />} />
          <Route exact path="/General" element={<News category="general" />} />
          <Route exact path="/Business" element={<News category="business" />} />
          <Route exact path="/Entertainment" element={<News category="entertainment" />} />
          <Route exact path="/Health" element={<News category="health" />} />
          <Route exact path="/Science" element={<News category="science" />} />
          <Route exact path="/Sports" element={<News category="sports" />} />
          <Route exact path="/Technology" element={<News category="technology" />} />
          <Route exact path="/About" element={<About/>}></Route>
          
        </Routes>
      </div>
      </Router>
    )
  }
}