import React from "react";
import SlotsButton from "./SlotsButton";
import SlotsRow from "./SlotsRow";
import RatingBox from "./RatingBox";


function SlotsGame() {
    return (
        <div>
            <SlotsRow />
            <RatingBox />
            <SlotsButton />
        </div>
    )
};

export default SlotsGame;
