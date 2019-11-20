import React from "react";
import { Link } from "gatsby";
import styles from "./styles.scss";

const NavigationItem = ({ text, to }) => (
    <div className="main-navigation--item">
        <h2>
            <Link activeClassName={"isActive"} to={`${to}`}>
                {text}
            </Link>
        </h2>
    </div>
);

export default NavigationItem;
