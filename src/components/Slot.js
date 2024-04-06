import React, { useContext, useState, useEffect } from "react";
import SpinningContext from "../utils/SpinningContext";
import StratagemsContext from "../utils/StratagemsContext";
import "../styles/Slot.css";
import SlotOption from "./SlotOption";


function Slot(props) {
    const { isSpinning } = useContext(SpinningContext);
    const { stratagems } = useContext(StratagemsContext);
    const [ shuffledStratagems, setShuffledStratagems ] = useState([]);
    const [ localSpin, setLocalSpin ] = useState(false);
    const [ optionSize, setOptionSize ] = useState(0);

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
        } else {
            setTimeout(() => {
                setLocalSpin(false);
            }, props.time);
        }
    }, [isSpinning, props.time]);

    function getRandomOption() {
        let res = {
            id: 0,
            style: {},
        };

        if (shuffledStratagems.length > 0) {
            let i = Math.floor(Math.random() * (shuffledStratagems.length - 2));
            let top = (i * (0 - optionSize)) - 0.55;
            res["style"] = {
                transform: `translateY(${top}%)`,
            }
        }

        return res;
    }

    const style = getRandomOption();

    return (
        <div className="slot">
            <div className={`options-container ${localSpin ? "spinning" : "still"}`} style={style.style}>
                {shuffledStratagems}
            </div>
        </div>
    );
};

export default Slot;
