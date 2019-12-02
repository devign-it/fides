import React from "react";
import get from "lodash/get";
import PageContent from "../PageContent";
import Navigation from "../Navigation";
import Helmet from "react-helmet";

// import { Demo3 } from "../CustomCursor";
// import { CustomCursor } from "../CustomCursor";

// import { changeDocumentTitle } from "../SiteTitle";

const siteTitle = get(this, "props.data.site.siteMetadata.title");

class Layout extends React.Component {
    componentDidMount() {
        // changeDocumentTitle();
        // customCursorDemo3();
        // new Demo3();
    }

    render() {
        return (
            <>
                <Helmet title={siteTitle} />
                <PageContent>
                    {this.props.showNav && (
                        <Navigation
                            isSticky={this.props.stickyNav}
                            showHome={this.props.showHome}
                            showGoBack={this.props.showGoBack}
                            showResume={this.props.showResume}
                        />
                    )}
                    {this.props.children}
                    {/* <CustomCursor /> */}
                </PageContent>
            </>
        );
    }
}

export default Layout;
