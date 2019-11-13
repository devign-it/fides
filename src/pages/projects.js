import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
// import styles from './blog.module.css'
import Layout from "../components/layout";
import ProjectPreview from "../components/ProjectPreview";

class ProjectIndex extends React.Component {
    render() {
        const siteTitle = get(this, "props.data.site.siteMetadata.title");
        const posts = get(this, "props.data.allContentfulProjectPost.edges");

        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet title={siteTitle} />
                    <div className="wrapper">
                        <h2 className="section-headline">Recent Projects</h2>
                        <section className="article-list">
                            {posts.map(({ node }) => {
                                return (
                                    <article key={node.slug}>
                                        <ProjectPreview project={node} />
                                    </article>
                                );
                            })}
                        </section>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default ProjectIndex;

export const pageQuery = graphql`
    query ProjectIndexQuery {
        allContentfulProjectPost {
            edges {
                node {
                    title
                    slug
                    featuredImage {
                        fluid {
                            ...GatsbyContentfulFluid_noBase64
                        }
                    }
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }
`;
