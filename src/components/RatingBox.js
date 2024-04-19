import React from "react";
import "../styles/RatingBox.css";

function RatingBox() {
    return (
        <div className="rating-container">
            <div className="rating-box">
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
