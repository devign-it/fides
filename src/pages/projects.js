import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import ProjectsRoll from "../components/ProjectsRoll";

class ProjectIndex extends React.Component {
    render() {
        const siteTitle = get(this, "props.data.site.siteMetadata.title");
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");

        return (
            <Layout location={this.props.location} showNav={true} showHome={true} stickyNav={true}>
                <Helmet title={siteTitle} />
                <ProjectsRoll items={posts} />
                <Footer mode={"ghost"} showInternalLinks={false} />
            </Layout>
        );
    }
}

export default ProjectIndex;

export const pageQuery = graphql`
    query ProjectIndexQuery {
        allContentfulProjectPosts(sort: { fields: order, order: ASC }, limit: 5) {
            edges {
                node {
                    client
                    color
                    darkText
                    featuredImage {
                        fluid {
                            ...GatsbyContentfulFluid_noBase64
                        }
                        description
                    }
                    slug
                    title
                    categoryTags {
                        category
                        slug
                    }
                }
            }
        }
    }
`;
