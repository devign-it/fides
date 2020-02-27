import React from "react";
import NavigationItemNew from "../NavigationItemNew";
import { Link } from "gatsby";
import DarkModeToggle from "../DarkModeToggle";
import Logo from "../Logo";
import "./styles.scss";

class Navigation extends React.Component {
    render() {
        return (
            <nav role="navigation" className="main-navigation">
                <Link to="/">
                    <Logo />
                </Link>
                <div className="col__right">
                    <div className="navigation--links">
                        <NavigationItemNew text="Projects" to="/projects/" />
                        <NavigationItemNew text="Services" to="/services/" />
                        <NavigationItemNew text="About" to="/about/" />
                    </div>
                    {/* <DarkModeToggle /> */}
                </div>
            </nav>
        );
    }
}

export default Navigation;
