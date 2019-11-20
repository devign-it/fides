import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";
import AnimatedQuote from "../components/AnimatedQuote";
import ProjectsRoll from "../components/ProjectsRoll";

// import { ProjectsFeed, initializeSwiper } from "../components/ProjectsFeed";
import "../styles/styles.scss";

class RootIndex extends React.Component {
    // componentDidMount() {
    //     initializeSwiper();
    // }

    render() {
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");

        return (
            <>
                <AnimatedQuote>Shaping the digital world is what I like and do</AnimatedQuote>
                <Layout showNav={true} location={this.props.location}>
                    {/* <ProjectsFeed feedSource={projects} /> */}
                    <ProjectsRoll items={posts} />
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
