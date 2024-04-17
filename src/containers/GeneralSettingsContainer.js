import React, { useContext } from "react";
import GeneralSettingsContext from "../utils/GeneralSettingsContext";
import GeneralSettings from "../components/GeneralSettings";
import "../styles/GeneralSettingsContainer.css";
import ResetStratagems from "../components/ResetStratagems";


function GeneralSettingsContainer() {
    const { generalSettings, updateGeneralSetting } = useContext(GeneralSettingsContext);

    function renderGeneralSettings() {
        const settings = [];
        for (const key in generalSettings) {
            settings.push(
                <GeneralSettings key={key} setting={generalSettings[key]} updateGeneralSetting={() => updateGeneralSetting(key)} />
            )
        };

        return settings;
    }
    return (
        <div className="general-settings-container">
            <div className="general-settings-title">
                <h2>GENERAL SETTINGS</h2>
            </div>
            {renderGeneralSettings()}
            <ResetStratagems />
        </div>
    );
};

export default GeneralSettingsContainer;
