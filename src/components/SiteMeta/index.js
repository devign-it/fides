import React from "react";
import "./styles.scss";

const SiteMeta = ({ darkMode, direction }) => {
    let classNames = "information";

    if (darkMode) {
        classNames += " inverted";
    }

    if (direction === "column") {
        classNames += " column";
    }

    return (
        <div className={classNames}>
            <p className="author">
                <a className="mail" href="mailto:daan@devign.it">
                    <span className="name">Daan van der Zwaag</span>
                    <span className="jobtitle">Design technologist</span>
                </a>
            </p>
            <p className="subtitle">Portfolio 2020</p>
        </div>
    );
};

export default SiteMeta;
