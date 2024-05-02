import React, { useContext, useEffect, useState } from "react";
import "../styles/RatingBox.css";
import AppContext from "../utils/AppContext";

function RatingBox() {
    const { appMode } = useContext(AppContext);
    const [ showBox, setShowBox ] = useState(false);

    useEffect(() => {
        if (appMode === "resolved") {
            setTimeout(() => setShowBox(true), 900);
        } else {
            setShowBox(false);
        };
    }, [appMode]);

    return (
        <div className="rating-container">
            <div className={`rating-box ${showBox ? "visible" : "hidden"} mid`}>
                <div className="rating-hatch left"/>
                <div className="rating">
                    CATASTROPHIC
                </div>
                <div className="rating-hatch right"/>
            </div>
        </div>
    );
};

export default RatingBox;
