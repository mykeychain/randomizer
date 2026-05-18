import React, { useContext, useState } from "react";
import StratagemsContext from "../utils/StratagemsContext";
import SettingsStratagem from "./SettingsStratagem";
import "../styles/Warbond.css";

function SettingsWarbond({ warbondId, warbondName }) {
    const { stratagems, updateStratagems, toggleWarbond } = useContext(StratagemsContext);
    const [collapsed, setCollapsed] = useState(true);

    const filteredKeys = Object.keys(stratagems).filter(key => stratagems[key].warbond === warbondId);
    const anyActive = filteredKeys.some(key => stratagems[key].active);

    return (
        <div className="station-container warbond-container">
            <div className="station-title warbond-title">
                <div className="warbond-header">
                    <h2
                        onClick={() => setCollapsed(!collapsed)}
                        className="warbond-toggle"
                    >
                        <span className={`warbond-chevron ${collapsed ? "" : "expanded"}`}>&#9654;</span>
                        {warbondName.toUpperCase()}
                    </h2>
                    <button
                        className={`warbond-toggle-btn ${anyActive ? "active" : ""}`}
                        onClick={() => {
                        toggleWarbond(warbondId);
                        if (!anyActive) setCollapsed(false);
                    }}
                    >
                        {anyActive ? "Disable All" : "Enable All"}
                    </button>
                </div>
            </div>
            {!collapsed && (
                <div className="stratagems-container">
                    {filteredKeys.map(key => (
                        <SettingsStratagem
                            key={key}
                            stratagem={stratagems[key]}
                            stratagemKey={key}
                            toggleStratagem={() => updateStratagems(key)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SettingsWarbond;
