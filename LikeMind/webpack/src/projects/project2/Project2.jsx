import React from "react";
import CustomSelect from "./components/CustomSelect.jsx";
import './scss/customSelect.scss'
const Project2 = () => {
  return (
    <div className="Project2">
      <div>
        <h1>CustomDrop-Down</h1>
      </div>
      <CustomSelect
        options={["Option 1", "Option 2", "Option 3"]}
        isMultiSelect={true}
      />
    </div>
  );
};

export default Project2;