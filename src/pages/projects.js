import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import ProjectsRoll from "../components/ProjectsRoll";

class ProjectIndex extends React.Component {
    render() {
        const siteTitle = get(this, "props.data.site.siteMetadata.title");
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");

        return (
            <Layout location={this.props.location} showNav={true} showHome={true} stickyNav={true}>
                <Helmet title={siteTitle} />
                {/* <h2 className="section-headline">Recent Projects </h2> */}
                <ProjectsRoll items={posts} />
            </Layout>
        );
    }
}

export default ProjectIndex;

export const pageQuery = graphql`
    query ProjectIndexQuery {
        allContentfulProjectPosts {
            edges {
                node {
                    title
                    slug
                    color
                    client
                    featuredImage {
                        fluid {
                            ...GatsbyContentfulFluid_noBase64
                        }
                    }
                }
            }
        }
    }
`;
