import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";
import AnimatedQuote from "../components/AnimatedQuote";
import ProjectsRoll from "../components/ProjectsRoll";
import Footer from "../components/Footer";
import AboutPreview from "../components/AboutPreview";

import "../styles/styles.scss";

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
                    <ProjectsRoll items={posts} />
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
