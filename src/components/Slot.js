import React, { useContext, useState, useEffect } from "react";
import AppContext from "../utils/AppContext";
import SpinningContext from "../utils/SpinningContext";
import StratagemsContext from "../utils/StratagemsContext";
import WinnerContext from "../utils/WinnerContext";
import "../styles/Slot.css";
import SlotOption from "./SlotOption";


function Slot(props) {
    const { appMode } = useContext(AppContext);
    const { isSpinning } = useContext(SpinningContext);
    const { stratagems } = useContext(StratagemsContext);
    const { dispatch } = useContext(WinnerContext);
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
                    <SlotOption key={`${stratagem.name}-option`} stratagem={stratagem} />
                );
            };
        };
        setOptionSize(100/shuffledStratagems.length);
        setShuffledStratagems(shuffledStratagems);
    }, [stratagems]);

    useEffect(() => {
        if (isSpinning) {
            setLocalSpin(true);
            let res = getRandomOption();
            let winnerName = res.name;
            dispatch({ type: "UPDATE", payload: winnerName });
            console.log('style here', res, props.time);
        } else if (appMode === "init") {
            setComponentStyle({top: "-2rem"})
        } else {
            setTimeout(() => {
                setLocalSpin(false);
            }, props.time);
        }
    }, [isSpinning, props.time, appMode]);

    function getRandomOption() {
        let res = {
            style: {},
        };

        if (shuffledStratagems.length > 0) {
            let i = Math.floor(Math.random() * (shuffledStratagems.length - 2));
            // let i = 0;
            let winnerName = shuffledStratagems[i]["props"]["stratagem"]["name"];
            let top = (-i * optionSize);
            res["name"] = winnerName;
            res["style"] = {
                transform: `translateY(${top}%)`,
            };
        };

        setComponentStyle(res.style);
        return res;
    };


    return (
        <div className="slot">
            <div className={`options-container ${localSpin ? "spinning" : "still"}`} style={componentStyle === undefined ? "top: -2%" : componentStyle}>
                {shuffledStratagems}
            </div>
        </div>
    );
};

export default Slot;
