import React from "react";
import SlotsButton from "./SlotsButton";
import SlotsRow from "./SlotsRow";
import WeaponsRow from "./WeaponsRow";


function SlotsGame() {
    return (
        <div>
            <WeaponsRow />
            <SlotsRow />
            <SlotsButton />
        </div>
    )
};

export default SlotsGame;
