import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";
import { colors, sizes } from "../../config/variable";
// import { isDarkMode } from "../../config/helpers";
import "./styles.scss";

export const ThemeToggle = styled.div``;

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <div className="toggle__theme" onClick={darkMode.toggle}>
            <span className="toggle__theme__switch"></span>
        </div>
    );
};

export default DarkModeToggle;
