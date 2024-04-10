import React, { useContext, useState } from "react";
import AppContext from "../utils/AppContext";
import SpinningContext from "../utils/SpinningContext";
import WinnerContext from "../utils/WinnerContext";
import "../styles/SlotsButton.css";

function SlotsButton() {
    const { appMode, setAppMode } = useContext(AppContext);
    const { setIsSpinning } = useContext(SpinningContext);
    const [ isClickable, setIsClickable ] = useState(true);
    const { dispatch } = useContext(WinnerContext);

    function toggleSpinning() {
        dispatch({ type: "RESET" });
        setIsSpinning(true);
        setIsClickable(false);
        setAppMode("game");

        setTimeout(() => {
            setIsSpinning(false)
            setTimeout(() => setIsClickable(true), 600);
            setAppMode("resolved");
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
