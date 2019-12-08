import React from "react";
import { TweenMax, Power3 } from "gsap";
import "./styles.scss";

export class CursorDevign {
    constructor() {
        // initPageTransitions();
        this.initCursor();
        this.initHovers();
    }

    initCursor() {
        // const { Back } = window;
        this.outerCursor = document.querySelector(".circle-cursor--outer");
        this.innerCursor = document.querySelector(".circle-cursor--inner");
        this.outerCursorBox = this.outerCursor.getBoundingClientRect();
        this.outerCursorSpeed = 0;

        // this.easing = window.easeOut.Power1;
        this.clientX = -100;
        this.clientY = -100;
        this.showCursor = false;

        const unveilCursor = () => {
            TweenMax.set(this.innerCursor, {
                x: this.clientX,
                y: this.clientY,
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
        const handleMouseEnter = (e) => {
            this.isStuck = false;
            const target = e.currentTarget;
            const box = target.getBoundingClientRect();

            this.outerCursorOriginals = {
                width: this.outerCursorBox.width,
                height: this.outerCursorBox.height,
            };

            TweenMax.to(this.outerCursor, 0.2, {
                x: box.left,
                y: box.top,
                width: this.outerCursorBox.width * 1.5,
                height: this.outerCursorBox.height * 1.5,
            });
        };

        const handleMouseLeave = () => {
            this.isStuck = false;
            TweenMax.to(this.outerCursor, 0.2, {
                width: this.outerCursorOriginals.width,
                height: this.outerCursorOriginals.height,
                opacity: 0.2,
                borderColor: "#ffffff",
            });
        };

        const linkItems = document.querySelectorAll("a");

        linkItems.forEach((item) => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });

        const mainNavHoverTween = TweenMax.to(this.outerCursor, 0.3, {
            backgroundColor: "#ffffff",
            ease: Power3.easeIn,
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
class CustomCursor extends React.Component {
    componentDidMount() {
        new CursorDevign();
    }
    render() {
        return (
            <>
                <div className="circle-cursor circle-cursor--inner"></div>
                <div className="circle-cursor circle-cursor--outer"></div>
            </>
        );
    }
}
export default CustomCursor;
