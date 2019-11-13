import styled from "styled-components";
import React from "react";

const headingSizes = {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
};

export const Heading = (props) => {
    let sizedHeading;

    switch (props.type) {
        case "h1":
            sizedHeading = <h1 style={headingSizes.h1}>{props.children}</h1>;
            break;
        case "h2":
            sizedHeading = <h2 style={headingSizes.h2}>{props.children}</h2>;
            break;
        case "h3":
            sizedHeading = <h3 style={headingSizes.h3}>{props.children}</h3>;
            break;
        case "h4":
            sizedHeading = <h4 style={headingSizes.h4}>{props.children}</h4>;
            break;
        case "h5":
            sizedHeading = <h5 style={headingSizes.h5}>{props.children}</h5>;
            break;
        case "h6":
            sizedHeading = <h6 style={headingSizes.h6}>{props.children}</h6>;
            break;
        default:
            sizedHeading = <h1 style={headingSizes.h1}>{props.children}</h1>;
            break;
    }

    return sizedHeading;
};

// max-width; $s-main * 8
export const Paragraph = styled.p`
    max-width: calc(6rem * 8);
    margin-left: auto;
    margin-right: auto;
`;
