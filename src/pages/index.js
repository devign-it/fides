import React from "react";

import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import EmailSignup from "../components/EmailSignup";

import AppMockupImage from "../assets/images/mockup-app_3.png";
// import Img from "gatsby-image";

import "../styles/pages/index.scss";

class RootIndex extends React.Component {
    render() {
        return (
            <Layout showHome={true} showNav={false} location={this.props.location}>
                <Navigation />
                <header className="header--container">
                    <div className="information">
                        <h1>Fighting incorrect medical data with Blockchain</h1>
                        <p>
                            Every day, patients around the world get harmed due to false data. We believe blockchain and
                            human-designed interfaces can solve this problem. Your body, your data. Fides is an
                            action-oriented research into the future of healthcare information systems. Currently, we're
                            developping our first prototype.
                        </p>
                        {/* <a href="mailto:info@devign.it" className="info-modal--button">
                            <span>Get in touch</span>
                        </a> */}
                    </div>
                    <div className="mockup">
                        <img alt="Fides Mockup V0.8" src={AppMockupImage} />
                    </div>
                </header>
                <footer className="header--footer">
                    <h2>Welcome to the future of healthcare</h2>
                    <p>
                        Subscribe our the newsletter to receive the latest updates on our quest to fight incorrect
                        medical data
                    </p>
                    <EmailSignup />
                </footer>
            </Layout>
        );
    }
}

export default RootIndex;
