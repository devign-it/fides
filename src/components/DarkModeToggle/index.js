import React from "react";
import useDarkMode from "use-dark-mode";
import "./styles.scss";

const DarkModeToggle = () => {
    const darkMode = useDarkMode(true);

    return (
        <div role="button" className="toggle__theme" tabIndex="0" onClick={darkMode.toggle}>
            <span className="toggle__theme__switch" />
        </div>
    );
};

export default DarkModeToggle;
