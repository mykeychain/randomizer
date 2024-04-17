import React, { useContext } from "react";
import StratagemsContext from "../utils/StratagemsContext";


function ResetStratagems() {
    const { resetStratagems } = useContext(StratagemsContext);

    return (
        <div className="general-setting-option" onClick={resetStratagems}>
            RESET STRATAGEMS
        </div>
    );
};

export default ResetStratagems;
