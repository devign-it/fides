import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const NavigationItem = ({ text, to }) => (
    <Link className="main-navigation--item" activeClassName={"isActive"} to={`${to}`}>
        <h2>{text}</h2>
    </Link>
);

export default NavigationItem;
