import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../styles/SettingsButton.css";

function SettingsButton(props) {

    function toggleSettings() {
        if (props.currentMode === "game") {
            props.setCurrentMode("settings");
        } else {
            props.setCurrentMode("game");
        };
    };

    return (
        <div className={`settings-button ${props.currentMode === "settings" ? "open" : "closed"}`} onClick={toggleSettings}>
            <span>
                <FontAwesomeIcon icon={faGear} className="settings-icon" />
            </span>
        </div>
    )
}

export default SettingsButton;