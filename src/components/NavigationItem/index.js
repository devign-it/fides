import React from "react";
import { Link } from "gatsby";
import "./styles.scss";
import ExternalLink from "../../components/ExternalLink";

const NavigationItem = ({ text, to, isExternal }) => {
    return (
        <>
            {isExternal ? (
                <a className="main-navigation--item" href={to} target="_blank" rel="noopener noreferrer">
                    <h2>{text}</h2>
                </a>
            ) : (
                <Link className="main-navigation--item" activeClassName={"isActive"} to={`${to}`}>
                    <h2>{text}</h2>
                </Link>
            )}
        </>
    );
};

export default NavigationItem;
