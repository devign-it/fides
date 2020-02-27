import React from "react";
import "./styles.scss";

import logoDevignWhite from "../../assets/images/devign-logo_horizontal_white.svg";
import logoDevignBlack from "../../assets/images/devign-logo_horizontal.svg";

const Logo = ({ height, color }) => {
    let logoSource = logoDevignWhite || logoDevignBlack;

    if (color === "black") {
        logoSource = logoDevignBlack;
    } else {
        logoSource = logoDevignWhite;
    }
    return (
        <div className="logo--wrapper">
            <img src={logoSource} alt="Devign.it" />
        </div>
    );
};

export default Logo;
