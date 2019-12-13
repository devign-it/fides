import React from "react";
import "./styles.scss";
import SiteMeta from "../SiteMeta";
import SocialLinks from "../SocialLinks";
import useDarkMode from "use-dark-mode";

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

    if (useDarkMode) {
        darkMode = true;
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
