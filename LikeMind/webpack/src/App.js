import React from "react";
import './App.scss'
import { BrowserRouter as Router,Routes ,Route ,Link} from "react-router-dom";
import Project1 from "./projects/project1/Project1.jsx";
import Project2 from "./projects/project2/Project2.jsx";
import Project3 from "./projects/project3/Project3.jsx";
import Project4 from "./projects/project4/Project4.jsx";
import Project5 from "./projects/project5/project5.jsx"

import Home from './projects/Home.jsx' 
const App = () => {
  return (
    <div className="main">
    <Router>
      <div className="home_button">
      <Link to="/"><div>Home</div></Link>
      </div>
      <div className="project_routes">
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route  path="/project1" element={<Project1/>} />
      <Route  path="/project2" element={<Project2/>} />
      <Route  path="/project3" element={<Project3/>} />
      <Route  path="/project4" element={<Project4/>} />
      <Route path="/project5" element={<Project5/>}/> 
    </Routes>
      </div>
    </Router>
    </div>
    
  )
  ;
};

export default App;