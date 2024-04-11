import React, { useContext, useEffect } from "react";
import Slot from "./Slot";
import AppContext from "../utils/AppContext";
import SpinningContext from "../utils/SpinningContext";
import StratagemsContext from "../utils/StratagemsContext";
import WinnerContext from "../utils/WinnerContext";
import "../styles/SlotsRow.css";


function SlotsRow() {
    const { isSpinning } = useContext(SpinningContext);
    const { stratagems } = useContext(StratagemsContext);
    const { dispatch } = useContext(WinnerContext);

    useEffect(() => {
        if (isSpinning) {
            getRandomWinners();
        }
    }, [ isSpinning ])

    function getRandomWinners() {
        const filteredStratagemIds = Object.keys(stratagems).filter(id => stratagems[Number(id)]["active"] === true);
        const winnerIdxs = [];
        const payload = {};
        for (let i = 1; i <= 4; i++ ) {
            let randomIndex = Math.floor(Math.random() * (filteredStratagemIds.length));
            while (winnerIdxs.includes(randomIndex)) {
                randomIndex = Math.floor(Math.random() * (filteredStratagemIds.length));
            };
            winnerIdxs.push(randomIndex);
            let id = filteredStratagemIds[randomIndex];
            let winnerName = stratagems[id]["name"];
            payload[i] = winnerName;
        };
        dispatch({ type: "UPDATE", payload });
    };

    return (
        <div className="slots-row">
            <Slot id={1} time={0}/>
            <Slot id={2} time={200}/>
            <Slot id={3} time={400}/>
            <Slot id={4} time={600}/>
        </div>
    )
}

export default SlotsRow;
