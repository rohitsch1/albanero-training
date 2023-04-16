import React from 'react'
import { Link} from "react-router-dom";
import './home.scss'
const Home = () => {
  return (
    <div>
      <div className='title'>
      <h1>Webpack Application</h1>
      <h2>Projects: </h2>
      </div>
      <div className="navigation">
        <div  className='project_button'>
        <Link to="/project1"><div><h1>Access control page</h1></div></Link>
        </div>
        <div className='project_button'>
        <Link to="/project2"><div><h1>CustomDrop-Down</h1></div></Link>
        </div>
        <div className='project_button'>
        <Link to="/project3"><div><h1>Fetching User Data</h1></div></Link>
        </div>
        <div className='project_button'> 
        <Link to="/project4"><div><h1>LikedIn-StillWorking</h1></div></Link> 
        </div> 
        <div className='project_button'> 
        <Link to="/project5"><div><h1>timer</h1></div></Link> 
        </div> 
      </div>
    </div>
  )
}

export default Home
