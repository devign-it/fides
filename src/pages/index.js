import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";
import AnimatedQuote from "../components/AnimatedQuote";
import ProjectsRoll from "../components/ProjectsRoll";
import Footer from "../components/Footer";
import AboutPreview from "../components/AboutPreview";

import "../styles/pages/index.scss";

class RootIndex extends React.Component {
    render() {
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");
        const aboutContent = get(this, "props.data.contentfulAbout");

        return (
            <>
                <AnimatedQuote>
                    Untangling complex problems with human-designed technology is what I like and do
                </AnimatedQuote>
                <Layout
                    showHome={true}
                    showNav={true}
                    stickyNav={true}
                    showResume={false}
                    location={this.props.location}
                >
                    <section className="section--selected-projects">
                        <div className="section--heading">
                            <h2 className="title">Selected projects</h2>
                            <p className="subtitle">Portfolio 2020</p>
                        </div>
                        <ProjectsRoll items={posts} showButton={true} />
                    </section>
                    <AboutPreview source={aboutContent} />
                    <Footer mode={"ghost"} showInternalLinks={false} />
                </Layout>
            </>
        );
    }
}

export default RootIndex;

export const HomepageQuery = graphql`
    query HomepageQuery {
        site {
            siteMetadata {
                title
            }
        }
        contentfulAbout {
            shortDescription {
                json
            }
            topImage {
                fluid {
                    ...GatsbyContentfulFluid_noBase64
                }
            }
            bottomImage {
                fluid {
                    ...GatsbyContentfulFluid_noBase64
                }
            }
        }
        allContentfulProjectPosts(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    client
                    color
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
