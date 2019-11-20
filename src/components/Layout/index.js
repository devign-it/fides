import React from "react";
import get from "lodash/get";
import PageContent from "../PageContent";
import Navigation from "../Navigation";
import Helmet from "react-helmet";
import { changeDocumentTitle } from "../SiteTitle";

const siteTitle = get(this, "props.data.site.siteMetadata.title");

class Layout extends React.Component {
    componentDidMount() {
        changeDocumentTitle();
    }

    render() {
        return (
            <>
                <Helmet title={siteTitle} />
                <PageContent>
                    {this.props.showNav ? <Navigation isSticky={true} /> : ``}
                    {this.props.children}
                </PageContent>
            </>
        );
    }
}

export default Layout;
