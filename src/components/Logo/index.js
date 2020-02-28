import React from "react";
import "./styles.scss";

import logoFidesWhite from "../../assets/images/fides-logo_white.svg";
import logoFidesRed from "../../assets/images/fides-logo_red.svg";

const Logo = ({ height, color }) => {
    let logoSource = logoFidesWhite || logoFidesRed;

    if (color === "red") {
        logoSource = logoFidesRed;
    } else {
        logoSource = logoFidesWhite;
    }
    return (
        <div className="logo--wrapper">
            <img src={logoSource} alt="Devign.it" />
        </div>
    );
};

export default Logo;
