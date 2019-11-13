import React from "react";
import anime from "animejs/lib/anime.es.js";
import styled from "styled-components";
import { breakpoints, colors, sizes } from "../../config/variable";
import DarkModeToggle from "../DarkModeToggle";

export const HeaderContainer = styled.header`
    min-height: 100vh;
    background-color: ${colors.white};
    color: black;
    padding: calc(${sizes.magicNumber} / 4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    perspective: 100vh;

    .author,
    .quote {
        margin: 0;
        z-index: 9;
    }

    .author {
        a {
            color: black;
            text-decoration: none;
            .name {
                display: inline;
            }
            .jobtitle {
                display: none;
            }
            &:hover {
                color: black;
                .name {
                    display: none;
                }
                .jobtitle {
                    display: inline;
                }
            }
        }
    }

    .quote {
        margin-bottom: calc(8rem / 2);
    }

    @media screen and (min-width: ${breakpoints.tabletBreakpoint}) {
        padding: calc(${sizes.magicNumber} / 2);
        .quote {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
        padding: $s-main;
    }
`;

class AnimatedQuote extends React.Component {
    constructor(props) {
        super(props);
        this.quoteContainer = React.createRef();
        this.animatedQuote = React.createRef();
    }

    componentDidMount() {
        const header = this.quoteContainer.current;
        const quote = this.animatedQuote.current;

        header.addEventListener("mousemove", (event) => {
            let xPos = event.clientX / window.innerWidth + 0.05 / 2;
            let yPos = event.clientY / window.innerHeight + 0.05 / 2;

            console.log(xPos, yPos);

            anime({
                targets: ".quote",
                easing: "easeOutQuint",
                duration: 750,
                // translateX: 900,
                rotationY: yPos * -10,
                rotationX: xPos * 20,
                // rotation: Math.sqrt(Math.pow(xPos, 4) + Math.pow(yPos, 2)) * 5,
                skewY: Math.pow(xPos, 2) * -5,
                skewX: Math.pow(yPos, 2) * -20,
            });

            // moveTitle();
        });
    }

    render() {
        return (
            <HeaderContainer ref={this.quoteContainer} className="header--container">
                <p className="author">
                    <a className="doPopup mail" rel="item__portrait" href="mailto:daan@devign.it">
                        <span className="name">Daan van der Zwaag</span>
                        <span className="jobtitle">Design technologist</span>
                    </a>
                </p>
                <h1 ref={this.animatedQuote} className="quote">
                    {this.props.children}
                </h1>
                {/* <DarkModeToggle /> */}
            </HeaderContainer>
        );
    }
}

export default AnimatedQuote;
