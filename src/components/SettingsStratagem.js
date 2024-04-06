import React from "react";
import "../styles/SettingsStratagem.css";

function SettingsStratagem(props) {
    let stratagem = props.stratagem;

    return (
        <div className={`settings-stratagem-card ${stratagem.active ? "active" : "inactive"}`} key={stratagem.name} onClick={props.toggleStratagem}>
            <img className="settings-stratagem-icon"
                src={require(`../stratagem_icons/${stratagem.name}.svg`)}
                alt={stratagem.short_name}
            />
        </div>
    );
};

export default SettingsStratagem;