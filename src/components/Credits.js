import React from "react";
import "../styles/Credits.css";

function Credits() {
    return (
        <div className="credits">
            <div>
                CHECK OUT THE REPO FOR THIS <span><a href="https://github.com/mykeychain/randomizer" target="_blank" rel="noreferrer">PROJECT</a></span> 
            </div>
            <div>
                ALL STRATAGEM ICONS ARE SOURCED FROM <span><a href="https://github.com/nvigneux/Helldivers-2-Stratagems-icons-svg" target="_blank" rel="noreferrer">NVIGNEUX AND NDORFIN</a></span>
            </div>
            <div>
                THIS PROJECT IS FAN MADE AND IS NOT AFFILIATED WITH HELLDIVERS, ARROWHEAD STUDIOS, OR PLAYSTATION STUDIOS
            </div>
        </div>
    );
};

export default Credits;
