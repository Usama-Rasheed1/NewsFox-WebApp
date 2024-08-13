import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import About from './components/About.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=>{

  const apiKey= 'bd752d6e112541949dd7003a048b24c3'

  const [progress, setProgress] = useState(0)

  
    return (
      <Router>
      <div>
        {/* <Navbar/>
        <LoadingBar
        height={3}
        color='#190c4a'
        progress={progress}
        /> */}
        <Routes>

          <Route path="/General" element={<News setProgress={setProgress} apiKey={apiKey} category="general"  />} />
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} category="europe"  />} />
          <Route path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} category="business"  />} />
          <Route path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} category="entertainment"  />} />
          <Route path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} category="health"  />} />
          <Route path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} category="science"  />} />
          <Route path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} category="sports"  />} />
          <Route path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} category="technology"  />} />
          <Route path="/About" element={<About/>}></Route>
          
        </Routes>
      </div>
      </Router>
    )
}
export default App