import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";
import AnimatedQuote from "../components/AnimatedQuote";
import ProjectsRoll from "../components/ProjectsRoll";
import Footer from "../components/Footer";

import "../styles/styles.scss";

class RootIndex extends React.Component {
    render() {
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");

        return (
            <>
                <AnimatedQuote>
                    I want to challenge the most complex problems with human designed technology
                </AnimatedQuote>
                <Layout showNav={true} stickyNav={true} showResume={true} location={this.props.location}>
                    <ProjectsRoll items={posts} />
                    <Footer mode={"ghost"} showInternalLinks={false} />
                </Layout>
            </>
        );
    }
}

export default RootIndex;

export const HomepageQuery = graphql`
    query HomepageQuery {
        allContentfulProjectPosts {
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
                }
            }
        }
    }
`;
