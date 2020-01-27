import React from "react";
import anime from "animejs/lib/anime.es.js";
import FluidSimulation from "./fluidsimulation";
import "./styles.scss";

class AnimatedQuote extends React.Component {
    constructor(props) {
        super(props);
        this.quoteContainer = React.createRef();
        this.animatedQuote = React.createRef();
    }

    componentDidMount() {
        FluidSimulation(this.quoteContainer.current);
    }

    render() {
        return (
            <div ref={this.quoteContainer} className="canvas--background">
                <div class="scroll-indicator__down"></div>
            </div>
        );
    }
}

export default AnimatedQuote;
