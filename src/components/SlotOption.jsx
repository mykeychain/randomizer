import React, { useContext, useState, useEffect } from "react";
import AppContext from "../utils/AppContext";
import SpinningContext from "../utils/SpinningContext";
import ToolTipContext from "../utils/ToolTipContext";
import WinnerContext from "../utils/WinnerContext";
import { getIconUrl } from "../utils/icons";
import "../styles/SlotOption.css";

function SlotOption(props) {
    const { appMode } = useContext(AppContext);
    const { isSpinning } = useContext(SpinningContext);
    const { setPosition, showToolTip, hideToolTip } = useContext(ToolTipContext);
    const { state } = useContext(WinnerContext);
    const [ isWinner, setIsWinner ] = useState(false);
    const stratagem = props.stratagem;

    useEffect(() => {
        if (!isSpinning && state[props.slotId] === props.stratagemKey) {
            setTimeout(() => {
                setIsWinner(true);
            }, 700);
        } else {
            setIsWinner(false);
        }
    }, [state, isSpinning])

    function handleMouseEnter(content) {
        showToolTip(stratagem.short_name);
    };

    function handleMouseMove(e) {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className={`option ${isSpinning ? "spinning" : "still"} ${isWinner && appMode === "resolved"  ? "winner" : ""}`}
            onMouseEnter={() => handleMouseEnter(stratagem.short_name)}
            onMouseMove={handleMouseMove}
            onMouseLeave={hideToolTip}>
            <img className="game-stratagem-icon"
                src={getIconUrl(stratagem.icon)}
                alt={stratagem.short_name}
            />
        </div>
    );
};

export default SlotOption;
