import React from "react";
import get from "lodash/get";
import PageContent from "../PageContent";
import NavigationNew from "../Navigation";
import Helmet from "react-helmet";
// import changeDocumentTitle from "../SiteTitle";
import CustomCursor from "../CustomCursor";

const siteTitle = get(this, "props.data.site.siteMetadata.title");

function sayHello() {
    console.log(
        "%c 👋 You are probably interested in the used technologies? So am I, for this project I've used React, Gatsby, Anime, OGL and Contentful to create this website. You can checkout the repo on my Github. Found any mistakes? Let me know and I'll buy you a coffee or beer. Happy hacking!",
        "color:#fff; background-color:#000;",
    );
}
function changeDocumentTitle() {
    let messagesGone = ["Open window alert 💨", "Bye then 😌", "Launch me again 🚀", "See ya later 👋"];
    let windowIsFocused = document.hasFocus();
    let original;

    if (windowIsFocused) {
        document.title = siteTitle || "Devign.it";
    } else {
        let title = document.title;
        let choosenMessage = messagesGone[Math.floor(Math.random() * messagesGone.length)];
        if (title !== choosenMessage) {
            original = title;
        }
        document.title = choosenMessage;
    }
}

class Layout extends React.Component {
    componentDidMount() {
        changeDocumentTitle();
        sayHello();
    }
    componentDidUpdate() {
        changeDocumentTitle();
    }

    render() {
        return (
            <>
                <Helmet title={siteTitle} />
                {this.props.showNav && (
                    <NavigationNew
                        showHome={this.props.showHome}
                        showGoBack={this.props.showGoBack}
                        showResume={this.props.showResume}
                    />
                )}
                <PageContent pageName={this.props.pageName}>{this.props.children}</PageContent>
                <CustomCursor />
            </>
        );
    }
}

export default Layout;
