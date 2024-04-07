import React, { useContext, useState } from "react";
import SpinningContext from "../utils/SpinningContext";
import "../styles/SlotsButton.css";

function SlotsButton() {
    const { setIsSpinning } = useContext(SpinningContext);
    const [ isClickable, setIsClickable ] = useState(true);

    function toggleSpinning() {
        setIsSpinning(true);
        setIsClickable(false);

        setTimeout(() => {
            setIsSpinning(false)
            setTimeout(() => setIsClickable(true), 600);
        }, 1500);
    };

    return (
        <div>
            <button className={`slots-button ${isClickable ? "clickable" : "unclickable"}`} onClick={toggleSpinning}>
                RANDOMIZE
            </button>
        </div>
    )
};

export default SlotsButton;
