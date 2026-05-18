import React, { useContext } from "react";
import StratagemsContext from "../utils/StratagemsContext";
import SettingsStratagem from "./SettingsStratagem";
import "../styles/Station.css";

function Station(props) {
    const { stratagems, updateStratagems } = useContext(StratagemsContext);

    function renderStratagems(stationId) {
        const rows = [];
        const filteredKeys = Object.keys(stratagems).filter(key => stratagems[key]["station"] === stationId);
        for (let key of filteredKeys) {
            let stratagem = stratagems[key];
            if (stratagem) {
                rows.push(
                    <SettingsStratagem
                        key={key}
                        stratagem={stratagem}
                        stratagemKey={key}
                        toggleStratagem={(() => updateStratagems(key))}
                    />
                );
            };
        };
        return rows;
    }

    return (
        <div className="station-container">
            <div className="station-title">
                <h2>{props.stationName.toUpperCase()}</h2>
            </div>
            <div className="stratagems-container">
                {renderStratagems(props.stationId)}
            </div>
        </div>
    )
};

export default Station;
