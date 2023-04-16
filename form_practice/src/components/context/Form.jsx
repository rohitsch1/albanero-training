import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "./FormContext.jsx";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Bio, setMessage] = useState("");
  const [counter, setCounter] = useState(1); // initialize counter to 1
  const [domain ,setDomain] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // initialize error Bio to empty string

  const { formData, setFormData } = useContext(FormContext);

  function handleSubmit(event) {
    event.preventDefault();
    // check if any of the fields are empty
    if (name.trim() === "" || email.trim() === "" || Bio.trim() === "" || domain === "") {
      setErrorMessage("Please fill out all the fields."); // set error Bio
    } else {
      const newFormData = { id: counter, name, email, Bio, domain };
      setFormData([...formData, newFormData]);
      setName("");
      setEmail("");
      setMessage("");
      setDomain("");
      setCounter(counter + 1); // increment counter
      setErrorMessage(""); // clear error Bio
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="Bio">Bio:</label>
        <textarea
          id="Bio"
          value={Bio}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        <label htmlFor="domain">Domain:</label>
        <select id="domain" onChange={(event) => setDomain(event.target.value)} value={domain}>
          <option value="">--Select Domain--</option>
          <option value="frontEnd">Front-end</option>
          <option value="backend">Back-end</option>
          <option value="fullstack">Full-stack</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="ML">Machine Learning</option>
          <option value="dataAnalyst">Data Analyst</option>
        </select>

        {errorMessage && <p className="error">{errorMessage}</p>} {/* display error Bio if it exists */}
        
        <button type="submit">Submit</button>
      </form>

      <Link to="/tasks">Go to Tasks Page</Link> {/* link to TasksPage component */}
    </div>
  );
}

export default Form;
