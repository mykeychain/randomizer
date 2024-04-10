import React from "react";
import "../styles/WeaponOption.css";

function WeaponOption(props) {
    const weapon = props.weapon;

    return (
        <div>
            {/* <Suspense fallback={<div>{props.weapon.short_name}</div>}>
                <SvgComponent />
            </Suspense> */}
            <img className="game-weapon-icon"
                src={require(`../custom_icons/${weapon.name}.svg`)}
                alt={weapon.short_name}
            />
        </div>
    );
};

export default WeaponOption;
