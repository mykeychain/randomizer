import React, { useContext, useState, useEffect } from "react";
import SlotOption from "./SlotOption";
import AppContext from "../utils/AppContext";
import SpinningContext from "../utils/SpinningContext";
import StratagemsContext from "../utils/StratagemsContext";
import WinnerContext from "../utils/WinnerContext";
import "../styles/Slot.css";


function Slot(props) {
    const { appMode } = useContext(AppContext);
    const { isSpinning } = useContext(SpinningContext);
    const { stratagems } = useContext(StratagemsContext);
    const { state } = useContext(WinnerContext);
    const [ shuffledStratagems, setShuffledStratagems ] = useState([]);
    const [ localSpin, setLocalSpin ] = useState(false);
    const [ optionSize, setOptionSize ] = useState(0);
    const [ componentStyle, setComponentStyle ] = useState({})

    function shuffleIds(ids) {
        for (let i = ids.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = ids[i];
            ids[i] = ids[j];
            ids[j] = temp;
        }
        return ids;
    };

    useEffect(() => {
        const shuffledStratagems = [];
        const shuffledIds = shuffleIds(Object.keys(stratagems).filter(id => stratagems[id]["active"] === true));
        for (let i in shuffledIds) {
            let id = shuffledIds[i];
            let stratagem = stratagems[id];
            if (stratagem) {
                shuffledStratagems.push(
                    <SlotOption key={`${stratagem.name}-option`} stratagem={stratagem} slotId={props.id} />
                );
            };
        };
        setOptionSize(100/shuffledStratagems.length);
        setShuffledStratagems(shuffledStratagems);
    }, [stratagems]);

    useEffect(() => {
        if (isSpinning) {
            setLocalSpin(true);
        } else if (appMode === "init") {
            setComponentStyle({top: "-5rem"})
        } else {
            setTimeout(() => {
                setLocalSpin(false);
            }, props.time);
        }
    }, [isSpinning, props.time, appMode]);

    useEffect(() => {
        const winnerName = state[props.id];
        if (winnerName) {
            let style = {};
            let idx = shuffledStratagems.findIndex((s) => s["props"]["stratagem"]["name"] === winnerName)
            let top = (-idx * optionSize);
            style["transform"] = `translateY(${top}%)`;
            setComponentStyle(style);
        };
    }, [ state ]);

    return (
        <div className="slot">
            <div className={`options-container ${localSpin ? "spinning" : "still"}`} style={componentStyle}>
                {shuffledStratagems}
            </div>
        </div>
    );
};

export default Slot;
