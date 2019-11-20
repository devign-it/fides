import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";
import { colors, sizes } from "../../config/variable";
// import { isDarkMode } from "../../config/helpers";

export const ThemeToggle = styled.div`
    user-select: none;

    .toggle__theme__switch {
        appearance: initial;
        background-color: rgba(0, 0, 0, 0.2);
        position: relative;
        display: inline-block;
        width: calc(${sizes.magicNumber} / 2);
        height: calc(${sizes.magicNumber} / 2 + 1px);
        margin: 0 calc(${sizes.magicNumber} / 4);
        border-radius: calc(${sizes.magicNumber} / 2);
        vertical-align: middle;

        &:focus {
            outline: none;
        }

        &:after {
            left: calc(${sizes.magicNumber} / 10);
            content: "";
            position: absolute;
            width: calc(${sizes.magicNumber} / 6);
            height: calc(${sizes.magicNumber} / 6);
            top: calc(${sizes.magicNumber} / 10);
            border-radius: 50%;
            transition: left 0.2s, border-color 0.2s;
            background-color: ${colors.black};
        }
    }
`;

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <ThemeToggle className="toggle__theme" onClick={darkMode.toggle}>
            <span className="toggle__theme__letter">B</span>
            <input type="checkbox" className="toggle__theme__switch"></input>
            <span className="toggle__theme__letter">W</span>
        </ThemeToggle>

        // <div>
        //     <button type="button" onClick={darkMode.disable}>
        //         ☀
        //     </button>
        //     {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
        //     <button type="button" onClick={darkMode.enable}>
        //         ☾
        //     </button>
        // </div>
    );
};

export default DarkModeToggle;
