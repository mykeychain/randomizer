import React from "react";
import Station from "../components/SettingsStation";
import SettingsWarbond from "../components/SettingsWarbond";
import STATIONS from "../utils/Stations";
import WARBONDS from "../utils/Warbonds";


function StratagemsContainer() {
    function renderStations() {
        const stations = [];
        for (const key in STATIONS) {
            const station = STATIONS[key];
            stations.push(
                <Station key={key} stationId={key} stationName={station.display_name}/>
            )
        }
        return stations;
    };

    function renderWarbonds() {
        return Object.entries(WARBONDS).map(([key, warbond]) => (
            <SettingsWarbond key={key} warbondId={key} warbondName={warbond.display_name} />
        ));
    };

    return (
        <div>
            {renderStations()}
            <div className="warbonds-divider">PREMIUM WARBONDS</div>
            {renderWarbonds()}
        </div>
    );

};

export default StratagemsContainer;
