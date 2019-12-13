import React from "react";
import { TweenMax, Power3 } from "gsap";
import "./styles.scss";

export class CursorDevign {
    constructor() {
        this.initCursor();
        this.initHovers();
    }

    initCursor() {
        // const { Back } = window;
        this.outerCursor = document.querySelector(".circle-cursor--outer");
        this.innerCursor = document.querySelector(".circle-cursor--inner");
        this.outerCursorBox = this.outerCursor.getBoundingClientRect();
        this.innerCursorBox = this.innerCursor.getBoundingClientRect();

        this.outerCursorSpeed = 0;

        // this.easing = Back.Power3;
        this.clientX = -100;
        this.clientY = -100;
        this.showCursor = false;

        const unveilCursor = () => {
            TweenMax.set(this.innerCursor, {
                x: [0, this.clientX],
                y: [0, this.clientY],
            });
            TweenMax.set(this.outerCursor, {
                x: this.clientX - this.outerCursorBox.width / 2,
                y: this.clientY - this.outerCursorBox.height / 2,
            });
            setTimeout(() => {
                this.outerCursorSpeed = 0.2;
            }, 100);
            this.showCursor = true;
        };

        document.addEventListener("mousemove", unveilCursor);

        document.addEventListener("mousemove", (e) => {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        });

        const render = () => {
            TweenMax.set(this.innerCursor, {
                x: this.clientX,
                y: this.clientY,
            });
            if (!this.isStuck) {
                TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
                    x: this.clientX - this.outerCursorBox.width / 2,
                    y: this.clientY - this.outerCursorBox.height / 2,
                });
            }
            if (this.showCursor) {
                document.removeEventListener("mousemove", unveilCursor);
            }
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    }

    initHovers() {
        const handleMouseEnter = () => {
            this.isStuck = false;

            this.outerCursorOriginals = {
                width: this.outerCursorBox.width,
                height: this.outerCursorBox.height,
            };

            this.innerCursorOriginals = {
                width: this.innerCursorBox.width,
                height: this.innerCursorBox.height,
            };

            TweenMax.to(this.outerCursor, 0.2, {
                // x: box.left,
                // y: box.top,
                // width: this.outerCursorOriginals.width * 1.5,
                // height: this.outerCursorOriginals.height * 1.5,
                x: this.clientX,
                y: this.clientY,
                opacity: 0.5,
            });
            TweenMax.to(this.innerCursor, 0.2, {
                // x: this.clientX - this.outerCursorBox.width / 2,
                // y: this.clientY - this.outerCursorBox.height / 2,
                x: this.clientX - this.outerCursorBox.width * 2,
                y: this.clientY - this.outerCursorBox.height * 2,
                left: (this.outerCursorOriginals.width / 2) * -1,
                top: (this.outerCursorOriginals.height / 2) * -1,
                width: this.outerCursorBox.width,
                height: this.outerCursorBox.height,
                background: "#55ff00",
            });
        };

        const handleMouseLeave = () => {
            this.isStuck = false;
            TweenMax.to(this.outerCursor, 0.2, {
                width: this.outerCursorOriginals.width,
                height: this.outerCursorOriginals.height,
                opacity: 1,
            });
            TweenMax.to(this.innerCursor, 0.2, {
                width: this.innerCursorOriginals.width,
                height: this.innerCursorOriginals.height,
                left: (this.innerCursorOriginals.width / 2) * -1,
                top: (this.innerCursorOriginals.height / 2) * -1,
                x: this.clientX,
                y: this.clientY,
                background: "#fff",
            });
        };

        const linkItems = document.querySelectorAll("a");

        linkItems.forEach((item) => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });

        const mainNavHoverTween = TweenMax.to(this.outerCursor, 0.3, {
            ease: Power3.easeOut,
            paused: true,
        });

        const mainNavMouseEnter = () => {
            this.outerCursorSpeed = 0;
            TweenMax.set(this.innerCursor, { opacity: 0 });
            mainNavHoverTween.play();
        };

        const mainNavMouseLeave = () => {
            this.outerCursorSpeed = 0.2;
            TweenMax.set(this.innerCursor, { opacity: 1 });
            mainNavHoverTween.reverse();
        };

        const mainNavLinks = document.querySelectorAll(".content--fixed a");
        mainNavLinks.forEach((item) => {
            item.addEventListener("mouseenter", mainNavMouseEnter);
            item.addEventListener("mouseleave", mainNavMouseLeave);
        });
    }
}
function loadCursor() {
    setTimeout(function() {
        new CursorDevign();
    }, 120);
}

class CustomCursor extends React.Component {
    componentDidMount() {
        window.addEventListener("load", loadCursor());
    }
    render() {
        return (
            <>
                <div className="circle-cursor circle-cursor--inner" />
                <div className="circle-cursor circle-cursor--outer" />
            </>
        );
    }
}
export default CustomCursor;
