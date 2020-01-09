import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

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
