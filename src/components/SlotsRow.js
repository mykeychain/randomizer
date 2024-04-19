import React, { useContext, useEffect } from "react";
import Slot from "./Slot";
import GeneralSettingsContext from "../utils/GeneralSettingsContext";
import SpinningContext from "../utils/SpinningContext";
import StratagemsContext from "../utils/StratagemsContext";
import WinnerContext from "../utils/WinnerContext";
import "../styles/SlotsRow.css";


function SlotsRow() {
    const { generalSettings } = useContext(GeneralSettingsContext);
    const { isSpinning } = useContext(SpinningContext);
    const { stratagems } = useContext(StratagemsContext);
    const { dispatch } = useContext(WinnerContext);

    useEffect(() => {
        if (isSpinning) {
            let result = {};
            let passedCommonSense = false;
            while (!passedCommonSense) {
                result = getRandomWinners();
                passedCommonSense = commonSenseCheck(result.winnerIds);
            }
            dispatch({ type: "UPDATE", payload: result.payload });
        }
    }, [ isSpinning ])
    
    function commonSenseCheck(ids) {
        if (!generalSettings.common_sense.active) {
            return true;
        };
        let backpack = 0;
        let support = 0;
        let heavy = 0;
        for (let id of ids) {
            let currStratagem = stratagems[id];
            backpack += (currStratagem["backpack"] ? 1 : 0);
            support += (currStratagem["support_weapon"] ? 1 : 0);
            heavy += (currStratagem["heavy_ordinance"] ? 1 : 0);
        };
        console.log(`backpack score ${backpack} support score ${support} heavy score ${heavy}`);

        return (backpack <= 1 && support === 1 && heavy >= 1);
    }

    function getRandomWinners() {
        const filteredStratagemIds = Object.keys(stratagems).filter(id => stratagems[Number(id)]["active"] === true);
        const winnerIds = [];
        const payload = {};
        for (let i = 1; i <= 4; i++ ) {
            let randomIndex = Math.floor(Math.random() * (filteredStratagemIds.length));
            let id = filteredStratagemIds[randomIndex];
            while (winnerIds.includes(id)) {
                randomIndex = Math.floor(Math.random() * (filteredStratagemIds.length));
                id = filteredStratagemIds[randomIndex];
            };
            winnerIds.push(id);
            let winnerName = stratagems[id]["name"];
            payload[i] = winnerName;
        };
        return { payload, winnerIds };
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
