import React from "react";
import "./styles.scss";
import ExternalLink from "../ExternalLink";

const SocialLinks = ({ darkMode, enableInternal }) => {
    let classNames = "social-link--wrapper";

    if (darkMode) {
        classNames += " inverted";
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
                        <ExternalLink URL="/projects/" text="Projects" internalPage={true} alignRight={true} />
                    </div>
                ) : null}
                <div className="external--links">
                    <ExternalLink text="Github" URL="https://github.com/danoszz" alignRight={true} />
                    <ExternalLink text="Codepen" URL="https://codepen.io/danoszz/" alignRight={true} />
                    <ExternalLink
                        text="LinkedIn"
                        URL="https://www.linkedin.com/in/daanvanderzwaag/"
                        alignRight={true}
                    />
                    <ExternalLink text="Instagram" URL="https://www.instagram.com/devign.it" alignRight={true} />
                </div>
            </div>
        </>
    );
};

export default SocialLinks;
