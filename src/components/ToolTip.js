import React, { useContext } from "react";
import ToolTipContext from "../utils/ToolTipContext";
import "../styles/ToolTip.css";

function ToolTip() {
    const { toolTipVisible, tooltipContent, position } = useContext(ToolTipContext);

    const style = {
        top: position ? position.y + 25 : -45,
        left: position ? position.x : -45,
    };

    return (
        <div className={`tooltip ${toolTipVisible ? "visible" : "hidden"}`} style={style}>
            { tooltipContent.toUpperCase() }
        </div>
    );
};

export default ToolTip;
