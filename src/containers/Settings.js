import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import StratagemsContainer from "./StratagemsContainer";
import "../styles/Settings.css";

function Settings() {
    const { appMode, setAppMode } = useContext(AppContext);

    function toggleSettings() {
        if (appMode !== "settings") {
            setAppMode("settings");
        } else {
            setAppMode("init");
        };
    };

    return (
        <div className={`settings-container ${appMode === 'settings' ? 'open' : 'closed'}`}>
            <div className={`settings-window ${appMode === 'settings' ? 'open' : 'closed'}`}>
                <StratagemsContainer />
            </div>
            <div className={`settings-overlay ${appMode === "settings" ? "visible" : "invisible"}`} onClick={toggleSettings} />
        </div>
    )
}

export default Settings;
