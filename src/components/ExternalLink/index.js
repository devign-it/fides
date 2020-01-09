import React from "react";
import "./styles.scss";
import arrowIconUpWhite from "../../assets/images/icon-arrow_small_up.svg";
import arrowIconUpBlack from "../../assets/images/icon-arrow_small_up-black.svg";
import arrowIconDownWhite from "../../assets/images/icon-arrow_small_down.svg";
import arrowIconDownBlack from "../../assets/images/icon-arrow_small_down-black.svg";

const ExternalLink = ({ URL, text, alignRight, internalPage, darkMode }) => {
    let classNames = "link-button__inline external";

    if (alignRight) {
        classNames += " align-right";
    }
    let arrowIcon;

    function switchArrow() {
        if (internalPage) {
            arrowIcon = arrowIconDownWhite;
            if (!darkMode) {
                arrowIcon = arrowIconDownBlack;
            }
        } else {
            arrowIcon = arrowIconUpWhite;
            if (!darkMode) {
                arrowIcon = arrowIconUpBlack;
            }
        }
    }
    if (darkMode) {
        switchArrow();
    }
    switchArrow();

    // toggle.addEventListener("click", switchArrow());

    return (
        <a className={classNames} href={URL} target="_blank" rel="noopener noreferrer">
            {text}
            <span className="icon">
                <img alt="arrow icon" src={arrowIcon}></img>
            </span>
        </a>
    );
};

export default ExternalLink;
