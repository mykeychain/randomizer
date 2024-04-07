import React from "react";
import Station from "../components/SettingsStation";
import STATIONS from "../utils/Stations";
import "../styles/StratagemsContainer.css";


function StratagemsContainer() {
    function renderStations() {
        const stations = [];
        for (const i in STATIONS) {
            const station = STATIONS[i];
            stations.push(
                <Station key={station.display_name} stationId={i} stationName={station.display_name}/>
            )
        }
        return stations;
    };

    return (
        <div>
            {renderStations()}
        </div>
    );

};

export default StratagemsContainer;