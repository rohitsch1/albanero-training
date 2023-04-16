import React, { useEffect, useRef, useState } from "react";
import '../App.css'
import Child from './child'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useCollapse } from "react-collapsed";

function Folder() {


  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  function handleOnClick(parentId) {
    
    // Do more stuff with the click event!
    // Or, set isExpanded conditionally
    setExpanded(!isExpanded);
  }
  const [checkedChild, setCheckedChild] = useState(0);
  const [isParentChecked, setIsParentChecked] = useState([false]);
  const [isParentChecked2, setIsParentChecked2] = useState(false);
  const [isParentIndeterminate, setIsParentIndeterminate] = useState(false);
  const [isParentIndeterminate2, setIsParentIndeterminate2] = useState(false);


  const parentRef = useRef();
  const parentRef2 = useRef();

  const [open, setOpen] = useState(false)


  const handleCollapseClick = () => {
    setOpen(!open)

  }



  const handleChildCheckboxChange = (event) => {
    console.log(event.target.className)

    const checkedCount = document.querySelectorAll(`.${event.target.className}:checked`)
      .length;
    setCheckedChild(checkedCount);

    if (event.target.className == "child_check1") {
      if (checkedCount === 0) {
        setIsParentChecked(false);
        setIsParentIndeterminate(false);
      } else if (
        checkedCount < document.querySelectorAll(`.${event.target.className}`).length
      ) {
        setIsParentChecked(false);
        setIsParentIndeterminate(true);
      } else {
        setIsParentChecked(true);
        setIsParentIndeterminate(false);
      }
    }
    else if (event.target.className == "child_check2") {
      if (checkedCount === 0) {
        setIsParentChecked2(false);
        setIsParentIndeterminate2(false);
      } else if (
        checkedCount < document.querySelectorAll(`.${event.target.className}`).length
      ) {
        setIsParentChecked2(false);
        setIsParentIndeterminate2(true);
      } else {
        setIsParentChecked2(true);
        setIsParentIndeterminate2(false);
      }
    }
  };
  useEffect(() => {
    parentRef.current.indeterminate = isParentIndeterminate;
  }, [isParentIndeterminate])

  useEffect(() => {
    parentRef2.current.indeterminate = isParentIndeterminate2;
  }, [isParentIndeterminate2])


  const handleParentCheckboxChange1 = (event) => {
    const isChecked = event.target.checked;
    setIsParentChecked(isChecked);
    setIsParentIndeterminate(false);

    const childCheckboxes = document.querySelectorAll(`.child_check${event.target.id}`);
    childCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });

    setCheckedChild(isChecked ? childCheckboxes.length : 0);

  };

  const handleParentCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsParentChecked2(isChecked);
    setIsParentIndeterminate2(false);

    const childCheckboxes = document.querySelectorAll(`.child_check${event.target.id}`);
    childCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });

    setCheckedChild(isChecked ? childCheckboxes.length : 0);
  }
  return (
    <div className="Label">
      {/* <div> */}
      <label>
        <input
          type="checkbox"
          id="1"
          checked={isParentChecked}
          onChange={handleParentCheckboxChange1}
          ref={parentRef}
        />{" "}
        Parent
      </label>
      <Child value ={handleChildCheckboxChange()}/>
       
  
      {/* <p>Checked Child: {checkedChild}</p> */}
      <div>
      <label>
        <input
          type="checkbox"
          id="2"
          checked={isParentChecked2}
          onChange={handleParentCheckboxChange}
          ref={parentRef2}
        />{" "}
        Parent
      </label>
      <div className="header" {...getToggleProps({ onClick: handleOnClick(1) })}>
          {isExpanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </div>
        </div>
        <div {...getCollapseProps()}>
          <div className="content"><div style={{ marginLeft: "20px" }} >
            <label>
              <input
                type="checkbox"
                className="child_check1"
                onChange={handleChildCheckboxChange}
              />{" "}
              Child 1
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                className="child_check1"
                onChange={handleChildCheckboxChange}
              />{" "}
              Child 2
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                className="child_check1"
                onChange={handleChildCheckboxChange}
              />{" "}
              Child 3
            </label>
            <br />
          </div></div>
        </div>
      {/* <p>Checked Child: {checkedChild}</p> */}
    </div>
  );
}

export default Folder;

