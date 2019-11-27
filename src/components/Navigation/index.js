import React from "react";
import NavigationItem from "../NavigationItem";
import "./styles.scss";

class Navigation extends React.Component {
    // constructor() {
    //     super();
    //     this.nav = React.createRef();
    //     this.state = {
    //         animIsFinished: true,
    //         animOpenIsFinished: true,
    //         animOpenIsPlaying: false,
    //         animCloseIsFinished: true,
    //         animCloseIsPlaying: false,
    //         isStatic: true,
    //         isSticky: true,
    //         isHovered: true,
    //         isOpen: true,
    //         isClosed: false,
    //     };
    // }

    // navOnScroll() {
    //     // Close
    //     if (
    //         window.pageYOffset >= this.nav.current.parentElement.offsetTop &&
    //         this.nav.current.classList.contains("isSticky") === false
    //     ) {
    //         console.log(1);
    //         this.nav.current.classList.remove("isStatic");
    //         this.nav.current.classList.remove("isOpen");
    //         this.nav.current.classList.add("isSticky");
    //         this.nav.current.classList.add("isClosed");
    //     }

    //     // Open
    //     if (
    //         window.pageYOffset <= this.nav.current.parentElement.offsetTop &&
    //         this.nav.current.classList.contains("isSticky") === true
    //     ) {
    //         console.log(2);
    //         this.nav.current.classList.remove("isSticky");
    //         this.nav.current.classList.remove("isClosed");
    //         this.nav.current.classList.add("isStatic");
    //         this.nav.current.classList.add("isOpen");
    //     } else {
    //         return;
    //     }
    // }

    // navModule() {
    //     this.nav.current.addEventListener("click", () => this.openNav());
    //     this.nav.current.addEventListener("mouseleave", () => this.closeNav());
    // }

    // openNav() {
    //     if (this.nav.current.classList.contains("isSticky") === true) {
    //         this.nav.current.classList.remove("isStatic");
    //         this.nav.current.classList.remove("isClosed");
    //         this.nav.current.classList.add("isOpen");
    //     } else {
    //         return;
    //     }
    // }

    // closeNav() {
    //     if (this.nav.current.classList.contains("isSticky") === true) {
    //         this.nav.current.classList.remove("isOpen");
    //         this.nav.current.classList.add("isClosed");
    //     } else {
    //         return;
    //     }
    // }

    // componentDidMount() {
    //     window.onscroll = () => this.navOnScroll();
    //     window.addEventListener("resize", () => this.navModule());
    //     this.navModule();
    // }

    render() {
        return (
            <nav
                ref={this.nav}
                role="navigation"
                className="main-navigation isOpen"
                style={{ position: this.props.isSticky ? "sticky" : "relative" }}
            >
                {this.props.showHome && <NavigationItem text="Home" to="/" />}
                <NavigationItem text="Projects" to="/projects/" />
                <NavigationItem text="About" to="/about/" />
            </nav>
        );
    }
}

export default Navigation;
