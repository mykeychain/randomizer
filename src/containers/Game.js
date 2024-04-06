import React from "react";
import GameTitle from "../components/GameTitle";
import SlotsGame from "../components/SlotsGame";
import "../styles/Game.css";


function Game() {
    return (
        <div className="game-container">
            <GameTitle />
            <SlotsGame />
        </div>
    )
}

export default Game;