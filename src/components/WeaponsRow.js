import React from "react";
import WeaponsSlot from "./WeaponsSlot";
import "../styles/WeaponsRow.css";


function WeaponsRow() {
    return (
        <div className="slots-row weapons-row">
            <WeaponsSlot type="primary"/>
            <WeaponsSlot type="secondary"/>
            <WeaponsSlot type="grenade"/>
        </div>
    );
};

export default WeaponsRow;
