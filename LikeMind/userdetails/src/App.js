import React, { useState } from "react";

function CustomSelectBox() {
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Seconds");

  const handleToggleOptions = () => {
    setIsOptionsShown(!isOptionsShown);
  };

  const handleSelectOption = (value) => {
    setSelectedOption(value);
    setIsOptionsShown(false);
  };

  return (
    <div className="units">
      <div className="select-wrapper" onClick={handleToggleOptions}>
        <div className="selected-option">{selectedOption}</div>
        <div className="arrow">&#9662;</div>
      </div>
      <div className={`options ${isOptionsShown ? "show" : ""}`}>
        <div className="option" onClick={() => handleSelectOption("Seconds")}>
          Seconds
        </div>
        <div className="option" onClick={() => handleSelectOption("Minutes")}>
          Minutes
        </div>
        <div className="option" onClick={() => handleSelectOption("Hours")}>
          Hours
        </div>
      </div>
    </div>
  );
}

export default CustomSelectBox;
