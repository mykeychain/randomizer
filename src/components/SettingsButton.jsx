import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../styles/SettingsButton.css";

function SettingsButton(props) {
    const { appMode, setAppMode } = useContext(AppContext);

    function toggleSettings() {
        if (appMode !== "settings") {
            setAppMode("settings");
        } else {
            setAppMode("init");
        };
    };

    return (
        <div className={`settings-button ${appMode === "settings" ? "open" : "closed"}`} onClick={toggleSettings}>
            <span>
                <FontAwesomeIcon icon={faGear} className="settings-icon" />
            </span>
        </div>
    )
}

export default SettingsButton;