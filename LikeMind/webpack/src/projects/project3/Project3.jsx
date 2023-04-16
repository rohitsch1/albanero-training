import React,{ useState, useEffect } from "react";
import BasicCard from "./Card.jsx";
// import Project1 from "../project1/Project1";
import './project3.scss'

function Project3() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const prevUser = () => {
    setCurrentIndex((currentIndex - 1 + users.length) % users.length);
  };

  const nextUser = () => {
    setCurrentIndex((currentIndex + 1) % users.length);
  };

  return (
    <div className="card">
      <div>
        <h1>Fetching User Data</h1>
      </div>
      <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
          <BasicCard value ={users[currentIndex]}/>
      )}
      </div>
      <div style={{display:"flex"}}>
      <button className="prev_button" onClick={prevUser}>PREV</button>
      <button className="next_button" onClick={nextUser}>NEXT</button>
      </div>
    </div>
  );
}

export default Project3;
