import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const SiteMeta = ({ darkMode, direction, hideSubtitle }) => {
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
                <Link to="/">
                    <span className="name typography__medium">Daan van der Zwaag</span>
                    <span className="jobtitle typography__medium">Design technologist</span>
                </Link>
            </p>
            {hideSubtitle ? null : <p className="subtitle">Portfolio 2020</p>}
        </div>
    );
};

export default SiteMeta;
