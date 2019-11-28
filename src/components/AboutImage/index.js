import React from "react";
import Img from "gatsby-image";
import anime from "animejs/lib/anime.es.js";

import "./styles.scss";

class AboutImage extends React.Component {
    constructor(props) {
        super(props);
        this.imageWrapper = React.createRef();
        this.bottomImage = React.createRef();
        this.topImage = React.createRef();
    }

    componentDidMount() {
        // imageWrapper.addEventListener("mousemove", (event) => {
        //     let animationOpacity = anime({
        //         targets: ".top--image",
        //         opacity: [0.15, 0.85],
        //         elasticity: 200,
        //         duration: 2000,
        //         easing: "easeOutQuint",
        //         autoplay: false,
        //     });

        //     let xPos = event.clientX / window.innerWidth;

        //     animationOpacity.seek(xPos * animationOpacity.duration);

        //     console.log(xPos);

        // });
        function getScrollPercent() {
            var h = document.documentElement,
                b = document.body,
                st = "scrollTop",
                sh = "scrollHeight";
            return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
        }

        const imageWrapper = this.imageWrapper.current;
        const tl = anime.timeline({ autoplay: false, targets: ".top--image", easing: "easeOutQuint" });

        // let animationSkewIn = anime({
        //     targets: ".about-image--wrapper",
        //     rotateY: [-10],
        //     rotateX: [20, 0],
        //     rotateY: [5, 0],
        //     duration: 6000,
        //     easing: "easeOutQuint",
        //     autoplay: true,
        // });

        tl.add(
            {
                opacity: [1, 0],
                duration: 2000,
            },

            0,
        );

        // new AnimePlayer({ add: tl })

        window.addEventListener("scroll", () => {
            const percentage = getScrollPercent();
            tl.seek(tl.duration * (percentage * 0.02));
        });

        // imageWrapper.onload = () => {
        //     animationSkewIn.play();
        // };

        // imageWrapper.addEventListener("mousedown", () => {
        //     // tl.seek(tl.duration * (percentage * 0.01));
        //     // tl.seek(tl.duration * (percentage * 0.01));
        //     tl.play();
        // });
        // imageWrapper.addEventListener("mouseup", () => {
        //     tl.reverse();
        // });
    }
    render() {
        return (
            <div ref={this.imageWrapper} className="about-image--wrapper">
                <div ref={this.topImage} className="image--container top--image">
                    <Img fluid={this.props.topImage} />
                </div>
                <div ref={this.bottomImage} className="image--container bottom--image">
                    <Img fluid={this.props.bottomImage} />
                </div>
                <p className="image--source">
                    Photography by <a href="https://reinkooyman.com/">Rein Kooyman</a>
                </p>
            </div>
        );
    }
}

export default AboutImage;
