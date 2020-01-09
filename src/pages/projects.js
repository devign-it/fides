import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import ProjectsRoll from "../components/ProjectsRoll";
import "../styles/pages/projects.scss";

class ProjectIndex extends React.Component {
    render() {
        const siteTitle = get(this, "props.data.site.siteMetadata.title");
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");

        return (
            <Layout location={this.props.location} showNav={true} showHome={true} pageName={"projects"}>
                <Helmet title={siteTitle} />
                <ProjectsRoll items={posts} showButton={false} amount={4} />
                <Footer mode={"ghost"} showInternalLinks={false} />
            </Layout>
        );
    }
}

export default ProjectIndex;

export const pageQuery = graphql`
    query ProjectIndexQuery {
        allContentfulProjectPosts(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    client
                    color
                    darkText
                    heroImage {
                        fluid {
                            ...GatsbyContentfulFluid_noBase64
                        }
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
