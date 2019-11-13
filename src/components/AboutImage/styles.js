import styled from "styled-components";
import { breakpoints, sizes, easings, delays } from "../../config/variable";

export const AboutPicture = styled.figure`
    display: flex;
    margin: calc(${sizes.magicNumber} / 2) 0;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: transform calc(${delays.delayTotal} / 2) ${easings.tSmoothTwo},
        opacity calc(${delays.delayTotal} / 2) ${easings.tSmoothTwo};

    &:hover {
        img {
            transform: translate3d(0, 1rem, 0) rotateX(10deg) rotateY(-15deg) rotateZ(5deg);
            opacity: 0.75;
        }
    }

    img {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
        width: 100%;
        max-width: 25vh;
        transition: transform calc(${delays.delayTotal} / 2) ${easings.tSmoothTwo},
            opacity calc(${delays.delayTotal} / 2) ${easings.tSmoothTwo};
    }

    blockquote {
        text-align: center;
        position: absolute;
        max-width: initial;
        margin: 0;
        max-width: calc(${sizes.magicNumber} * 8);
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: ${breakpoints.tabletBreakpoint}) {
        margin: calc(${sizes.magicNumber}) 0 calc(${sizes.magicNumber} / 2) 0;
        img {
            max-width: 65vh;
        }
    }
`;
