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
                passedCommonSense = commonSenseCheck(result.winnerKeys);
            }
            dispatch({ type: "UPDATE", payload: result.payload });
        }
    }, [ isSpinning ])

    function commonSenseCheck(keys) {
        if (!generalSettings.common_sense.active) {
            return true;
        };
        let backpack = 0;
        let support = 0;
        let heavy = 0;
        for (let key of keys) {
            let currStratagem = stratagems[key];
            backpack += (currStratagem["backpack"] ? 1 : 0);
            support += (currStratagem["support_weapon"] ? 1 : 0);
            heavy += (currStratagem["heavy_ordinance"] ? 1 : 0);
        };
        console.log(`backpack score ${backpack} support score ${support} heavy score ${heavy}`);

        return (backpack <= 1 && support === 1 && heavy >= 1);
    }

    function getRandomWinners() {
        const filteredKeys = Object.keys(stratagems).filter(key => stratagems[key]["active"] === true);
        const winnerKeys = [];
        const payload = {};
        for (let i = 1; i <= 4; i++ ) {
            let randomIndex = Math.floor(Math.random() * (filteredKeys.length));
            let key = filteredKeys[randomIndex];
            while (winnerKeys.includes(key)) {
                randomIndex = Math.floor(Math.random() * (filteredKeys.length));
                key = filteredKeys[randomIndex];
            };
            winnerKeys.push(key);
            payload[i] = key;
        };
        return { payload, winnerKeys };
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
