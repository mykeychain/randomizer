import React, { useContext, useEffect, useState } from "react";
import AppContext from "../utils/AppContext";
import SpinningContext from "../utils/SpinningContext";
import "../styles/WinnerBox.css";

function WinnerBox() {
    const { appMode } = useContext(AppContext);
    const { isSpinning } = useContext(SpinningContext);
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        if (!isSpinning && appMode === "resolved") {
            setTimeout(() => {
                setIsVisible(true);
            }, 850);
        } else {
            setIsVisible(false);
        };
    }, [isSpinning, appMode]);

    return (
        <div className={`winner-box ${isVisible ? "visible" : "hidden"}`} />
    );
};

export default WinnerBox;
