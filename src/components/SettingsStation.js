import React, { useContext } from "react";
import StratagemsContext from "../utils/StratagemsContext";
import SettingsStratagem from "./SettingsStratagem";
import "../styles/Station.css";

function Station(props) {
    const { stratagems, updateStratagems } = useContext(StratagemsContext);

    function renderStratagems(stationId) {
        const rows = [];
        const filteredIds = Object.keys(stratagems).filter(id => stratagems[id]["station"] === Number(stationId));
        for (let i in filteredIds) {
            let id = filteredIds[i];
            let stratagem = stratagems[id];
            if (stratagem) {
                rows.push(
                    <SettingsStratagem
                        key={stratagem.name}
                        stratagem={stratagem}
                        stratagemId={id}
                        toggleStratagem={(() => updateStratagems(id))}
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