import React, { useContext } from "react";
import ToolTipContext from "../utils/ToolTipContext";
import "../styles/SettingsStratagem.css";

function SettingsStratagem(props) {
    const { setPosition, showToolTip, hideToolTip } = useContext(ToolTipContext);
    let stratagem = props.stratagem;

    function handleMouseEnter(content) {
        showToolTip(stratagem.short_name);
      };
    
    function handleMouseMove(e) {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className={`settings-stratagem-card ${stratagem.active ? "active" : "inactive"}`}
            key={stratagem.name}
            onClick={props.toggleStratagem}
            onMouseEnter={() => handleMouseEnter(stratagem.short_name)}
            onMouseMove={handleMouseMove}
            onMouseLeave={hideToolTip}>
            <img className="settings-stratagem-icon"
                src={require(`../stratagem_icons/${stratagem.name}.svg`)}
                alt={stratagem.short_name}
            />
        </div>
    );
};

export default SettingsStratagem;