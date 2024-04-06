import React from "react";
import StratagemsContainer from "./StratagemsContainer";
import "../styles/Settings.css";

function Settings(props) {

    function toggleSettings() {
        if (props.currentMode === "game") {
            props.setCurrentMode("settings");
        } else {
            props.setCurrentMode("game");
        };
    };

    return (
        <div className={`settings-container ${props.currentMode === 'settings' ? 'open' : 'closed'}`}>
            <div className={`settings-window ${props.currentMode === 'settings' ? 'open' : 'closed'}`}>
                <StratagemsContainer />
            </div>
            <div className={`settings-overlay ${props.currentMode === "settings" ? "visible" : "invisible"}`} onClick={toggleSettings} />
        </div>
    )
}

export default Settings;
