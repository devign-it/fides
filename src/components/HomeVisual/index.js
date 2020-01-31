import React from "react";
import FluidSimulation from "./fluidsimulation";
import WavyLines from "./wavylines";

import "./styles.scss";

class HomeVisual extends React.Component {
    constructor(props) {
        super(props);
        this.quoteContainer = React.createRef();
    }

    componentDidMount() {
        FluidSimulation(this.quoteContainer.current);
        // WavyLines(this.quoteContainer.current);
    }

    render() {
        return (
            <div ref={this.quoteContainer} className="canvas--background">
                <div className="scroll-indicator__down"></div>
            </div>
        );
    }
}

export default HomeVisual;
