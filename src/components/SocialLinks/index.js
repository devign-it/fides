import React from "react";
import "./styles.scss";
import ExternalLink from "../ExternalLink";

const SocialLinks = ({ darkMode }) => {
    let classNames = "social-link--wrapper";

    if (darkMode) {
        classNames += " inverted";
    }
    return (
        <>
            <div className={classNames}>
                <ExternalLink text="Github" URL="https://github.com/danoszz" alignRight={true}></ExternalLink>
                <ExternalLink text="Codepen" URL="https://codepen.io/danoszz/" alignRight={true}></ExternalLink>
                <ExternalLink
                    text="LinkedIn"
                    URL="https://www.linkedin.com/in/daanvanderzwaag/"
                    alignRight={true}
                ></ExternalLink>
                <ExternalLink
                    text="Instagram"
                    URL="https://www.instagram.com/daanvanderzwaag/"
                    alignRight={true}
                ></ExternalLink>
            </div>
        </>
    );
};

export default SocialLinks;
