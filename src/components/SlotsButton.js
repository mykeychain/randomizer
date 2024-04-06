import React, { useContext } from "react";
import SpinningContext from "../utils/SpinningContext";
import "../styles/SlotsButton.css";

function SlotsButton() {
    const { isSpinning, setIsSpinning } = useContext(SpinningContext);

    function toggleSpinning() {
        setIsSpinning(true);

        setTimeout(() => {
            setIsSpinning(false)
        }, 2000);
    };

    return (
        <div>
            <button className={`slots-button ${isSpinning ? "spinning" : "resolved"}`} onClick={toggleSpinning}>
                RANDOMIZE
            </button>
        </div>
    )
};

export default SlotsButton;
