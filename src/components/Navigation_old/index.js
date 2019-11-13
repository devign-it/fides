import React from "react";
import NavigationItem from "../NavigationItem";
import NavigationContainer from "./styling";
import anime from "animejs";

class Navigation extends React.Component {
    constructor() {
        super();
        this.nav = React.createRef();
        this.state = {
            animIsFinished: true,
            animOpenIsFinished: true,
            animOpenIsPlaying: false,
            animCloseIsFinished: true,
            animCloseIsPlaying: false,
            isStatic: true,
            isSticky: true,
            isHovered: true,
            isOpen: true,
            isClosed: false,
        };
    }

    navOnScroll() {
        if (window.pageYOffset >= this.nav.current && this.nav.current.classList.contains("isSticky") === false) {
            this.nav.current.classList.remove("isStatic");
            this.nav.current.classList.remove("isOpen");
            this.nav.current.classList.add("isSticky");
            this.nav.current.classList.add("isClosed");
            closeNav();
        }

        if (window.pageYOffset <= this.nav.current && this.nav.current.classList.contains("isSticky") === true) {
            this.nav.current.classList.remove("isSticky");
            this.nav.current.classList.remove("isClosed");
            this.nav.current.classList.add("isStatic");
            this.nav.current.classList.add("isOpen");
            openNav();
        } else {
            return;
        }
    }

    navModule() {
        this.nav.current.addEventListener("click", () => {
            this.openNav();
            this.nav.current.addEventListener("mouseover", () => this.openNav());
            this.nav.current.addEventListener("mouseleave", () => this.closeNav());
        });
    }

    openNav() {
        // Check if all animations finished
        console.log("o");

        let boxOpen = anime.timeline();
        boxOpen.add({
            targets: this.nav.current,

            keyframes: [
                {
                    width: "0%",
                    height: "0%",
                },
                {
                    width: "100%",
                    height: "100%",
                },
            ],
            duration: 2000,
            easing: "linear",
        });

        // if (
        //     this.state.isClosed === true &&
        //     this.state.animOpenIsPlaying === false &&
        //     this.state.animCloseIsPlaying === false
        // ) {
        // If true then set anim to false due to new anim starting
        // let tl = anime.timeline({
        //     targets: this.nav.current,
        //     duration: 500,
        //     easing: "easeOutExpo",
        // });
        // tl.add({
        //     borderRadius: 0,
        //     height: "100%",
        //     width: "100%",
        //     begin: () => {
        //         this.setState({ animOpenIsPlaying: true });
        //     },
        // }).add({
        //     targets: this.nav.current.childNodes,
        //     opacity: 1,
        //     begin: () => {
        //         anime({
        //             targets: this.nav.current.childNodes,
        //             display: "inline-block",
        //         });
        //     },
        //     complete: () => {
        //         this.setState({ isOpen: true });
        //         this.setState({ isClosed: false });
        //         this.setState({ animOpenIsPlaying: false });
        //         this.setState({ animOpenIsFinished: true });
        //     },
        // });
        // }
    }

    closeNav() {
        console.log("c");
        // if (
        //     this.state.isOpen === true &&
        //     this.state.animCloseIsPlaying === false &&
        //     this.state.animOpenIsPlaying === false
        // ) {
        let boxClose = anime.timeline();
        boxClose
            .add({
                targets: this.nav.current,
                width: ["100%", "0%"],
                // keyframes: [{ width: "100%" }, { width: "0%" }],
                duration: 2000,
                easing: "linear",
                loop: false,
            })
            .add({
                targets: this.nav.current,
                borderRadius: ["0", "100px"],
                height: ["100px", "50px"],
                // keyframes: [{ width: "100%" }, { width: "0%" }],
                duration: 2000,
                easing: "linear",
                loop: false,
            });
        // }
    }

    componentDidMount() {
        window.onscroll = () => this.navOnScroll();
        window.addEventListener("resize", () => this.navModule());
    }

    render() {
        return (
            <>
                <button
                    style={{
                        width: "50px",
                        height: "50px",
                        background: "cyan",
                        position: "fixed",
                        bottom: "20px",
                        left: "20px",
                    }}
                    // onClick={() => {
                    //     this.state.isOpen === true ? this.closeNav() : this.openNav();
                    // }

                    onClick={() => this.closeNav()}
                ></button>
                <NavigationContainer role="navigation" ref={this.nav}>
                    <NavigationItem text="Projects" to="/" className="isActive" />
                    <NavigationItem text="About" to="/about/" />
                    <NavigationItem text="Resume" to="/resume/" />
                    <NavigationItem text="Blog" to="/blog/" />
                </NavigationContainer>
            </>
        );
    }
}

export default Navigation;
