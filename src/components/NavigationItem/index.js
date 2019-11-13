import React from "react";
import { Link } from "gatsby";

import { NavigationItemContainer } from "./styles";

const NavigationItem = ({ text, to }) => (
    <NavigationItemContainer className="main-navigation--item">
        <h2>
            <Link className="main-navigation" activeClassName={"isActive"} to={`${to}`}>
                {text}
            </Link>
        </h2>
    </NavigationItemContainer>
);

export default NavigationItem;
