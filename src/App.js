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
  apiKey= process.env.REACT_APP_NEWS_API
  
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        

        <Routes>

          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="news" pageNo={this.pageNum} />} />
          <Route exact path="/General" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="general" pageNo={this.pageNum} />} />
          <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="business" pageNo={this.pageNum} />} />
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="entertainment" pageNo={this.pageNum} />} />
          <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="health" pageNo={this.pageNum} />} />
          <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="science" pageNo={this.pageNum} />} />
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="sports" pageNo={this.pageNum} />} />
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="technology" pageNo={this.pageNum} />} />
          <Route exact path="/About" element={<About/>}></Route>
          
        </Routes>
      </div>
      </Router>
    )
  }
}