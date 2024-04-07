import React from "react";
import { ReactComponent as Skull } from "../stratagem_icons/hd-full.svg";
import "../styles/GameTitle.css";


function GameTitle() {
    return (
        <div>
            <h1 className="game-title">STRATAGEM RANDOMIZER</h1>
            <Skull className="skull-icon"/>
        </div>
    )
}

export default GameTitle;
