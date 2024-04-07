import React, { useContext } from "react";
import SpinningContext from "../utils/SpinningContext";
import ToolTipContext from "../utils/ToolTipContext";
import "../styles/SlotOption.css";

function SlotOption(props) {
    const { isSpinning } = useContext(SpinningContext);
    const { setPosition, showToolTip, hideToolTip } = useContext(ToolTipContext);
    const stratagem = props.stratagem;

    function handleMouseEnter(content) {
        showToolTip(stratagem.short_name);
    };
    
    function handleMouseMove(e) {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className={`option ${isSpinning ? "spinning" : "still"}`}
            onMouseEnter={() => handleMouseEnter(stratagem.short_name)}
            onMouseMove={handleMouseMove}
            onMouseLeave={hideToolTip}>
            <img className="game-stratagem-icon"
                src={require(`../stratagem_icons/${stratagem.name}.svg`)}
                alt={stratagem.short_name}
            />
        </div>
    );
};

export default SlotOption;
