import React, { useState, useEffect, useRef } from 'react';
import '../scss/customSelect.scss';

function CustomSelect({ options, isMultiSelect }) {
  const [selectedOption, setSelectedOption] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [selectRef]);

  const handleOptionClick = (option) => {
    if (!isMultiSelect) {
      setSelectedOption(option);
      setIsOpen(false);
    } else if (selectedOption && selectedOption.includes(option)) {
      setSelectedOption(selectedOption.filter((item) => item !== option));
    } else {
      setSelectedOption(selectedOption ? [...selectedOption, option] : [option]);
    }
  };

  return (
    <div className="custom-select" ref={selectRef}>
      <div
        className="selected-option"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {selectedOption ? (
          isMultiSelect ? (
            selectedOption.join(", ")
          ) : (
            selectedOption
          )
        ) : (
          <span className="placeholder">Select an option</span>
        )}
        
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option}
              className={`option ${
                selectedOption && selectedOption.includes(option)
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
