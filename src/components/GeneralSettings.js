import React, { useContext } from "react";
import ToolTipContext from "../utils/ToolTipContext";
import { ReactComponent as Check } from "../stratagem_icons/check.svg";
import { ReactComponent as X } from "../stratagem_icons/x.svg";
import "../styles/GeneralSettings.css";


function GeneralSettings(props) {
    const { setPosition, showToolTip, hideToolTip } = useContext(ToolTipContext);
    const setting = props.setting;

    function handleMouseEnter() {
        showToolTip(setting.help);
      };
    
    function handleMouseMove(e) {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className={`general-setting-option ${setting["active"] ? "active" : "inactive"}`}
            onClick={props.updateGeneralSetting}
            onMouseEnter={() => handleMouseEnter()}
            onMouseMove={handleMouseMove}
            onMouseLeave={hideToolTip}>
            {setting["name"].toUpperCase()}
            <Check className={`earmark-icon ${setting["active"] ? "visible" : "hidden"}`}/>
            <X className={`earmark-icon ${setting["active"] ? "hidden" : "visible"}`}/>
        </div>
    );
};

export default GeneralSettings;
