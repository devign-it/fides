import React from "react";
import NavigationItem from "../NavigationItem";
import "./styles.scss";

// Make document variables
// let navTop = this.nav.current.parentElement.offsetTop;
// let navClass = this.nav.current.classList;

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
            timingInAnimation: 640,
        };
    }

    navOnScroll() {
        let navTop = this.nav.current.parentElement.offsetTop;
        let navClass = this.nav.current.classList;

        // Close
        if (window.pageYOffset >= navTop && navClass.contains("isSticky") === false) {
            navClass.remove("isStatic");
            navClass.remove("isOpen");

            navClass.add("isSticky");
            navClass.add("isClosed");

            // Set delay == timing animation == 640ms {
            //      navClass.add("isClosed");
            // }
        }

        // Open
        if (window.pageYOffset <= navTop && navClass.contains("isSticky") === true) {
            navClass.remove("isSticky");
            navClass.remove("isClosed");

            navClass.add("isStatic");
            navClass.add("isOpen");
        } else {
            return;
        }
    }

    openNav() {
        let navClass = this.nav.current.classList;

        if (navClass.contains("isSticky") === true && navClass.contains("isClosed") === true) {
            // navClass.remove("isStatic");

            navClass.add("isOpen");

            // ⚡️ SET DELAY FOR REMOVING ISCLOSED
            // navClass.remove("isClosed");

            console.log("openNav");
            // navClass.add("isOpen");
        } else {
            console.log("nah openNav");

            return;
        }
    }

    closeNav() {
        let navClass = this.nav.current.classList;

        if (navClass.contains("isSticky") === true) {
            // navClass.remove("isOpen");
            navClass.add("isClosed");
        } else {
            return;
        }
    }

    navModule() {
        let thisNav = this.nav.current;

        thisNav.addEventListener("click", () => this.openNav());
        // thisNav.addEventListener("mouseenter", () => this.openNav());

        // thisNav.addEventListener("mouseleave", () => this.closeNav());
    }

    componentDidMount() {
        // window.onscroll = () => this.navOnScroll();
        // window.addEventListener("resize", () => this.navModule());
        // this.navModule();
    }

    render() {
        return (
            <nav
                ref={this.nav}
                role="navigation"
                className="main-navigation isOpen"
                // style={{ position: this.props.isSticky ? "sticky" : "relative" }}
            >
                {/* {this.props.showGoBack && <NavigationItem text="⃪" to="/projects/" />} */}

                {this.props.showHome && <NavigationItem text="Home" to="/" />}
                <NavigationItem text="Projects" to="/projects/" />
                <NavigationItem text="About" to="/about/" />
                {this.props.showResume && (
                    <NavigationItem text="Resume" to="./resume-daanvanderzwaag_2019-2020.pdf" isExternal={true} />
                )}
            </nav>
        );
    }
}

export default Navigation;
