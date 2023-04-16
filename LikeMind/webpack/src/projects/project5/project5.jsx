import React, { useState, useEffect } from "react";
import './project5.scss'
function App() {
    const [time, setTime] = useState(0);
    const [unit, setUnit] = useState("seconds");
    const [isRunning, setIsRunning] = useState(false);
    const [isOptionsShown, setIsOptionsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Seconds");

    useEffect(() => {
        let intervalId = null;
        

        if (isRunning && time > 0) {
            intervalId = setTimeout(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

        } else {
            setIsRunning(false)
        }

        return () => clearInterval(intervalId);
    }, [time, isRunning]);

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const handleTimeChange = (event) => {
        if (!isRunning) {
            setTime(event.target.value);
        }
    };



    const handleStart = () => {

        let newTime;
        if (unit === "hours") {
            newTime = time * 3600;
        } else if (unit === "minutes") {
            newTime = time * 60;
        } else {
            newTime = time;
        }
        setTime(newTime);
        setIsRunning(true);
    };

    const formatTime = (time) => {
        if (unit === "hours") {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;
            return `${hours.toString().padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }
        else if (unit === "minutes") {
            const hours = 0
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`;
        }
        else {
            const hours = 0
            const minutes = 0
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${time.toString().padStart(2, "0")}`;
        }
    };



    const handleToggleOptions = () => {
        setIsOptionsShown(!isOptionsShown);
    };

    const handleSelectOption = (value) => {
        setSelectedOption(value);
        setUnit(value)
        setIsOptionsShown(false);
    };

    return (
        <div className="Main_div ">
            <button className="submit_button" onClick={handleStart} disabled={isRunning}>
                Start
            </button>
            
            <div className="input_div">
                <label>
                    Time:
                    <input
                        type="number"
                        value={isRunning !== true && time}
                        onChange={handleTimeChange}
                        disabled={isRunning}
                    />
                </label>
            </div>
            {isRunning===false&&
            <div className="units">
                    <div className="select-wrapper" onClick={handleToggleOptions}>
                        <div className="selected-option">{selectedOption}</div>
                    </div>
                    <div className="All-option">
                    {isOptionsShown&&<div>
                        <div className="option" onClick={() => handleSelectOption("seconds")}>
                            Seconds
                        </div>
                        <div className="option" onClick={() => handleSelectOption("minutes")}>
                            Minutes
                        </div>
                        <div className="option" onClick={() => handleSelectOption("hours")}>
                            Hours
                        </div>
                    </div>}
                    </div>
                </div>
                }
            <h1>{isRunning ? formatTime(time, unit) : ("00:00:00")}</h1>
            <button className="reset_button" onClick={handleReset}>Reset</button>
        </div>
    );
}

export default App;
