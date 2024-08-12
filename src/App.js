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
  pageNum=6;
  render() {
    return (
      <Router>
      <div>
        <Navbar/>

        <Routes>

          <Route exact path="/" element={<News category="." pageNo={this.pageNum} />} />
          <Route exact path="/General" element={<News category="general" pageNo={this.pageNum} />} />
          <Route exact path="/Business" element={<News category="business" pageNo={this.pageNum} />} />
          <Route exact path="/Entertainment" element={<News category="entertainment" pageNo={this.pageNum} />} />
          <Route exact path="/Health" element={<News category="health" pageNo={this.pageNum} />} />
          <Route exact path="/Science" element={<News category="science" pageNo={this.pageNum} />} />
          <Route exact path="/Sports" element={<News category="sports" pageNo={this.pageNum} />} />
          <Route exact path="/Technology" element={<News category="technology" pageNo={this.pageNum} />} />
          <Route exact path="/About" element={<About/>}></Route>
          
        </Routes>
      </div>
      </Router>
    )
  }
}