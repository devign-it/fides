import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";
import "./styles.scss";

export const ThemeToggle = styled.div``;

const DarkModeToggle = () => {
    const darkMode = useDarkMode(true);

    return (
        <div role="button" className="toggle__theme" tabIndex="0" onClick={darkMode.toggle}>
            <span className="toggle__theme__switch" />
        </div>
    );
};

export default DarkModeToggle;
