import React from "react";
import "./styles.scss";
import ExternalLink from "../ExternalLink";
import { Link } from "gatsby";
import arrowIconDownWhite from "../../assets/images/icon-arrow_small_down.svg";
import arrowIconDownBlack from "../../assets/images/icon-arrow_small_down-black.svg";

const SocialLinks = ({ darkMode, enableInternal }) => {
    let classNames = "social-link--wrapper";
    let arrowIcon = arrowIconDownWhite;

    if (!darkMode) {
        classNames += " inverted";
        arrowIcon = arrowIconDownBlack;
    }
    if (!enableInternal) {
        classNames += " justify-end";
    }
    return (
        <>
            <div className={classNames}>
                {enableInternal ? (
                    <div className="internal--links">
                        <ExternalLink
                            URL="../resume-daanvanderzwaag_2019-2020.pdf"
                            text="Resume"
                            internalPage={true}
                            alignRight={true}
                        />
                        <Link className="link-button__inline external align-right" to="/projects">
                            Projects
                            <span className="icon">
                                <img src={arrowIcon} alt="Icon arrow pointing upwards" />
                            </span>
                        </Link>
                    </div>
                ) : null}
                <div className="external--links">
                    <ExternalLink
                        text="Github"
                        URL="https://github.com/danoszz"
                        alignRight={true}
                        darkMode={darkMode}
                    />
                    <ExternalLink
                        text="Codepen"
                        URL="https://codepen.io/danoszz/"
                        alignRight={true}
                        darkMode={darkMode}
                    />
                    <ExternalLink
                        text="LinkedIn"
                        URL="https://www.linkedin.com/in/daanvanderzwaag/"
                        alignRight={true}
                        darkMode={darkMode}
                    />
                    <ExternalLink
                        text="Instagram"
                        URL="https://www.instagram.com/devign.it"
                        alignRight={true}
                        darkMode={darkMode}
                    />
                </div>
            </div>
        </>
    );
};

export default SocialLinks;
