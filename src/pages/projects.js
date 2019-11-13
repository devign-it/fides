import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import ProjectPreview from "../components/ProjectPreview";
// import LazyAnimation from "../components/LazyAnimation";
// import { useInView } from "react-intersection-observer";

class ProjectIndex extends React.Component {
    // componentDidMount() {

    // }
    render() {
        // const [ref, inView] = useInView({
        //     rootMargin: "-100px 0px",
        // });

        const siteTitle = get(this, "props.data.site.siteMetadata.title");
        const posts = get(this, "props.data.allContentfulProjectPost.edges");

        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet title={siteTitle} />
                    <div className="wrapper">
                        <h2 className="section-headline">Recent Projects </h2>
                        <section className="project-list">
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
                    color
                    client
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
