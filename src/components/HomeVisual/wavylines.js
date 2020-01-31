import React, { Component } from "react";
import Sketch from "react-p5";

let nlines = 60;
let res = 120; // number of segments for each line
let factor = 0.006; // noise factor
let speed = 0.0005;
var points = [];

let W = window.innerWidth,
    H = window.innerHeight;

let xstep = (H / nlines) * 2;
let ystep = W / res;

export default class WavyLines extends Component {
    setup = (p5, canvasParentRef) => {
        p5.disableFriendlyErrors = true; // disables FES

        W = p5.windowWidth;
        H = p5.windowHeight;

        const canvas = p5.createCanvas(W, H).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

        p5.strokeWeight(1.2);
        p5.smooth(8);
        p5.stroke(20);

        for (let x = 0; x < nlines; x++) {
            for (let y = 0; y < res; y++) {
                points.push([]);
            }
        }
    };

    draw = (p5) => {
        p5.background("#000");

        var i = 0;

        for (var x = 0; x < nlines; x++) {
            for (var y = 0; y < res; y++) {
                var n = p5.noise(x * factor * 1.5 + p5.frameCount * speed, (x + y) * factor + p5.frameCount * speed);
                points[i] = p5.createVector(x * xstep * n, y * ystep);
                i += 1;
            }
        }

        for (var id = 0; id < points.length - 1; id++) {
            if (id % res != res - 1) {
                if ((id % res > 5) & (id % res < res - 5)) {
                    // upper and lower edges
                    if ((id / res > 10) & (id / res < nlines - 20)) {
                        // left and right edges

                        let startLineY = points[id].y - ystep;
                        let startLineX = points[id].x - xstep;
                        let enLineY = points[id + 1].y - ystep;
                        let enLineX = points[id + 1].x - xstep;

                        p5.dif = p5.abs(points[id].x - points[id + 1].x);
                        p5.c = p5.map(p5.dif, 0, 2, 190, 20);
                        p5.stroke(p5.c);

                        p5.line(points[id].y, points[id].x, points[id + 1].y, points[id + 1].x);

                        // p5.line(startLineY, startLineX, enLineY, enLineX);
                    }
                }
            }
        }
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />;
    }
}
