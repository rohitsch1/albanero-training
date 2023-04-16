import React, { useState ,useEffect } from "react";

import { Typography, Button } from "@mui/material";
import "./Portfolio.scss";
import { Link } from "react-scroll";
import ContactPopup from "./Contact";



function Portfolio() {

   const first_text = "Rohit Singh";
    const second_text = "Full Stack Developer";
 
  
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setText1(first_text.slice(0, text1.length + 1));
      }, 400);
      return () => clearTimeout(timeout);
    }, [text1]);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setText2(second_text.slice(0, text2.length + 1));
      }, 80);
  
      return () => clearTimeout(timeout);
    }, [text2]);


  const [openPopup, setOpenPopup] = useState(false);

  const handleContactClick = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };


  return (
    <>
      <header className="header">
        <Typography variant="h5">My Portfolio</Typography>
        <nav>
          <Link to="hero" smooth={true} duration={500}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <Button color="inherit">Projects</Button>
          </Link>
          <Button color="inherit" onClick={handleContactClick}>
            Contact
          </Button>
        </nav>
      </header>
      <section id="hero" className="heroSection">
        <div className="heroContent">
          <Typography variant="h1">Hello, I'm {text1}</Typography>
          <Typography variant="h4">I'm a {text2}</Typography> 
          <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' alt='Img'></img>
          <Link to="projects" smooth={true} duration={500}>
          <Button variant="contained" color="primary">
            View Projects
          </Button>
          </Link>
        </div>
      </section>
      <section id="projects" className="projectsSection">
        <div className="projectsContent">
          <Typography variant="h3">My Projects</Typography>
          <Typography variant="subtitle1">
            Here are some of my latest projects:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">Project 1</Typography>
            </li>
            <li>
              <Typography variant="body1">Project 2</Typography>
            </li>
            <li>
              <Typography variant="body1">
                
                complete this function component.
              </Typography>
            </li>
          </ul>
        </div>
      </section>
      <ContactPopup open={openPopup} handleClose={handleClosePopup} />
      
    </>
  );
}

export default Portfolio;
