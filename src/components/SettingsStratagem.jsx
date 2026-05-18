import React, { useContext } from "react";
import ToolTipContext from "../utils/ToolTipContext";
import { getIconUrl } from "../utils/icons";
import "../styles/SettingsStratagem.css";

function SettingsStratagem(props) {
    const { setPosition, showToolTip, hideToolTip } = useContext(ToolTipContext);
    let stratagem = props.stratagem;

    function handleMouseEnter() {
        showToolTip(stratagem.short_name);
      };

    function handleMouseMove(e) {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className={`settings-stratagem-card ${stratagem.active ? "active" : "inactive"}`}
            key={props.stratagemKey}
            onClick={props.toggleStratagem}
            onMouseEnter={() => handleMouseEnter()}
            onMouseMove={handleMouseMove}
            onMouseLeave={hideToolTip}>
            <img className="settings-stratagem-icon"
                src={getIconUrl(stratagem.icon)}
                alt={stratagem.short_name}
            />
        </div>
    );
};

export default SettingsStratagem;
