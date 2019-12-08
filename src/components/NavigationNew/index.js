import React from "react";
import NavigationItemNew from "../NavigationItemNew";
import SiteMeta from "../../components/SiteMeta";
import DarkModeToggle from "../../components/DarkModeToggle";

import "./styles.scss";

class NavigationNew extends React.Component {
    render() {
        return (
            <nav role="navigation" className="main-navigation__new">
                <SiteMeta color="white" hideSubtitle={true} />
                <div className="col__right">
                    <div className="navigation--links">
                        <div className="home--link">
                            <NavigationItemNew text="Home" to="/" />
                        </div>
                        <NavigationItemNew text="Projects" to="/projects/" />
                        <NavigationItemNew text="About" to="/about/" />
                        {this.props.showResume && (
                            <NavigationItemNew
                                text="Resume"
                                to="./resume-daanvanderzwaag_2019-2020.pdf"
                                isExternal={true}
                            />
                        )}
                    </div>
                    <DarkModeToggle />
                </div>
            </nav>
        );
    }
}

export default NavigationNew;
