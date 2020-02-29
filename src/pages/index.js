import React from "react";

import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import EmailSignup from "../components/EmailSignup";

import AppMockupImage from "../assets/images/mockup-app_2.png";
// import Img from "gatsby-image";

import "../styles/pages/index.scss";

class RootIndex extends React.Component {
    render() {
        return (
            <Layout showHome={true} showNav={false} location={this.props.location}>
                <Navigation />
                <header className="header--container">
                    <div className="information">
                        <h1>Welome to the future of healthcare</h1>
                        <p>
                            Your body, your data. Gain back control and manage your health ID. Subscribe to the
                            newsletter to receive the latest updates on the progress.
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
                    <EmailSignup />
                </footer>
            </Layout>
        );
    }
}

export default RootIndex;
