import React from "react";
import "./styles.scss";
import arrowIconUp from "../../assets/images/icon-arrow_small_up.svg";
// import arrowIconUpDark from "../../assets/images/icon-arrow_small_up.svg";
import arrowIconDown from "../../assets/images/icon-arrow_small_down.svg";
// import arrowIconDownDark from "../../assets/images/icon-arrow_small_down.svg";

const ExternalLink = ({ URL, text, alignRight, internalPage }) => {
    let classNames = "link-button__inline external";
    let arrowIcon = arrowIconUp;

    if (alignRight) {
        classNames += " align-right";
    }
    if (internalPage) {
        arrowIcon = arrowIconDown;
    }

    return (
        <a className={classNames} href={URL} target="_blank" rel="noopener noreferrer">
            {text}
            <span className="icon">
                <img src={arrowIcon} alt="Icon arrow pointing upwards" />
            </span>
        </a>
    );
};

export default ExternalLink;
