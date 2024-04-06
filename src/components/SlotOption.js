import React, { useContext } from "react";
import SpinningContext from "../utils/SpinningContext";
import "../styles/SlotOption.css";

function SlotOption(props) {
    const { isSpinning } = useContext(SpinningContext);


    return (
        <div className={`option ${isSpinning ? "spinning" : "still"}`}>
            <img className="game-stratagem-icon"
                src={require(`../stratagem_icons/${props.stratagem.name}.svg`)}
                alt={props.stratagem.short_name}
            />
        </div>
    );
};

export default SlotOption;
