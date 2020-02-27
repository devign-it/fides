import React from "react";
import { Link } from "gatsby";
import "./styles.scss";
import arrowIcon from "../../assets/images/icon-arrow_small_down.svg";

export const ButtonWide = ({ text, to, inverted, internal }) => {
    return (
        <>
            {internal ? (
                <Link className={inverted ? "button__wide inverted" : "button__wide"} to={to}>
                    {text}
                </Link>
            ) : (
                <a
                    className={inverted ? "button__wide inverted" : "button__wide"}
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            )}
        </>
    );
};

export const ButtonInline = ({ text, to, internal }) => {
    return (
        <>
            {internal ? (
                <Link className="link-button__inline" to={to}>
                    {text}
                    <span className="icon">
                        <img src={arrowIcon} alt="Icon arrow pointing upwards" />
                    </span>
                </Link>
            ) : null}
        </>
    );
};
