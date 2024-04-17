import React, { useState } from 'react';
import GeneralSettingsContext from './GeneralSettingsContext';

const GeneralSettingsProvider = ({ children }) => {
    const [generalSettings, setGeneralSettings] = useState({
        common_sense: {
            name: "Common Sense Rules",
            active: true,
            help: "Enable common sense rules that make the randomizer a bit more forgiving",
        },
    });

    const updateGeneralSetting = (key) => {
        setGeneralSettings(prevSettings => ({
            ...prevSettings,
            [key]: {
                ...prevSettings[key],
                active: !prevSettings[key]["active"],
            },
        }));
    };

    return (
        <GeneralSettingsContext.Provider value={{ generalSettings, updateGeneralSetting }}>
            {children}
        </GeneralSettingsContext.Provider>
    );
};

export default GeneralSettingsProvider;
