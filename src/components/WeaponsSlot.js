import React from "react";
import PRIMARIES from "../utils/Primaries";
import "../styles/WeaponsSlot.css";
import WeaponOption from "./WeaponOption";

function WeaponsSlot(props) {
    function renderPrimaries() {
        const primaryOptions = [];
        for (let i in PRIMARIES) {
            primaryOptions.push(<WeaponOption weapon={PRIMARIES[i]} />);
        };
        return primaryOptions;
    };

    return (
        <div className={`slot weapons-slot ${props.type ? props.type : ""}`}>
            <div className="weapons-container">
                {renderPrimaries()}
            </div>
        </div>
    );
};

export default WeaponsSlot;
