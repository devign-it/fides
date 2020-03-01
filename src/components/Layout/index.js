import React from "react";
import get from "lodash/get";
import PageContent from "../PageContent";
import NavigationNew from "../Navigation";
import Helmet from "react-helmet";
import SEO from "../SEO";

const siteTitle = get(this, "props.data.site.siteMetadata.title");

function sayHello() {
    console.log(
        "%c 👋 You are probably interested in the used technologies? So are we, for this project we've used React, Gatsby, Anime, OGL and Contentful. You can checkout the repo on our Github. Found any mistakes? Let us know and we'll buy you a drink. Happy hacking!",
        "color:#ff1053; background-color:#081925;",
    );
}

class Layout extends React.Component {
    componentDidMount() {
        sayHello();
    }

    render() {
        return (
            <>
                <SEO />

                {/* <Helmet title={siteTitle} /> */}
                {this.props.showNav && (
                    <NavigationNew
                        showHome={this.props.showHome}
                        showGoBack={this.props.showGoBack}
                        showResume={this.props.showResume}
                    />
                )}
                <PageContent pageName={this.props.pageName}>{this.props.children}</PageContent>
            </>
        );
    }
}

export default Layout;
