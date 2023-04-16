import React, { useEffect, useState, useRef } from "react";
import { useCollapse } from "react-collapsed";
import '../App.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Test(props) {
    const userData = props.folderValue.children
    
    const [users, setUsers] = useState([]);
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    useEffect(() => {
        handleOnClick()
    }, [props.value])

    function handleOnClick() {
        if (props.value === true) {
            setExpanded(true)
        }
        setExpanded(!isExpanded);

    }


    const parentRef = useRef();
    useEffect(() => {
        const allChecked = users.every((user) => user?.isChecked === true);
        const someChecked = users.some((user) => user?.isChecked === true);
        parentRef.current.checked = allChecked;
        parentRef.current.indeterminate = someChecked && !allChecked;
    }, [users]);

    useEffect(() => {
        setUsers(userData);
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;

        const numberOfUnchecked = users.filter((user) => user?.isChecked === true).length
        // console.log(numberOfUnchecked)
        if (name === "allSelect") {
            let tempUser = users.map((user) => {
                return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
        }
        else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
        }



    };
    // console.log(users?.isChecked)
    // console.log(indeterminate)


    return (
        <div className="container">

            <form className="form">
                <div>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="allSelect"
                        checked={!users.some((user) => user?.isChecked !== true)}
                        ref={parentRef}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-check-label">{props.folderValue.name}</label>
                </div>
                <div>
                    <div className="collapsible">
                        <div
                            className="header"
                            {...getToggleProps({ onClick: handleOnClick })}
                        >
                            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>
                        <div  class="parent-container">
                        <div {...getCollapseProps()}>
                            <div className="content">
                                {users.map((user) => (
                                    <div className="form-check" key={users.id} >
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name={user.name}
                                            checked={user?.isChecked || false}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">{user.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Test;
