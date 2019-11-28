import React from "react";
import "./styles.scss";
import SiteMeta from "../SiteMeta";
import SocialLinks from "../SocialLinks";

const Footer = ({ mode, showInternalLinks }) => {
    let classNames = "page--footer";
    let darkMode = true;

    if (mode === "ghost") {
        classNames += " ghost";
        darkMode = false;
    } else if (mode === "dark") {
        classNames += " dark";
        darkMode = false;
    }

    return (
        <footer className={classNames}>
            <div className="col__left">
                <SiteMeta darkMode={darkMode} direction="column" />
            </div>
            <div className="col__right">
                <SocialLinks darkMode={darkMode} enableInternal={showInternalLinks} />
            </div>
        </footer>
    );
};

export default Footer;
