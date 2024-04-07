import React from "react";
import Slot from "./Slot";
import "../styles/SlotsRow.css";
import WinnerBox from "./WinnerBox";


function SlotsRow() {
    return (
        <div className="slots-row">
            <WinnerBox />
            <Slot time={0}/>
            <Slot time={200}/>
            <Slot time={400}/>
            <Slot time={600}/>
        </div>
    )
}

export default SlotsRow;
