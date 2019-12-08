import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const NavigationItemNew = ({ text, to, isExternal }) => {
    return (
        <>
            {isExternal ? (
                <a className="main-navigation--item__new" href={to} target="_blank" rel="noopener noreferrer">
                    <h3 className="typography__medium">{text}</h3>
                </a>
            ) : (
                <Link className="main-navigation--item__new" activeClassName={"isActive"} to={`${to}`}>
                    <h3 className="typography__medium">{text}</h3>
                </Link>
            )}
        </>
    );
};

export default NavigationItemNew;
