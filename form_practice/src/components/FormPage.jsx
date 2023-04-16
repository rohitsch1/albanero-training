import { useState } from "react";
import Form from "./context/Form";
import FormContext from "./context/FormContext";

function FormPage(props) {
  const [formData, setFormData] = useState([]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <div className="App">
        <h1>Contact Form</h1>
        <Form />
        <hr />
        <h2>Form Data:</h2>
        {JSON.stringify(formData)}
        {props.children}
      </div>
    </FormContext.Provider>
  );
}

export default FormPage;