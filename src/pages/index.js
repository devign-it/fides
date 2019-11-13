import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";
import AnimatedQuote from "../components/AnimatedQuote";

import { ProjectsFeed, initializeSwiper } from "../components/ProjectsFeed";
import "../styles/styles.scss";

class RootIndex extends React.Component {
    componentDidMount() {
        initializeSwiper();
    }

    render() {
        const projects = get(this, "props.data.allContentfulProjects.edges");
        return (
            <>
                <AnimatedQuote>Shaping the digital world is what I like and do</AnimatedQuote>

                <Layout location={this.props.location}>
                    <ProjectsFeed feedSource={projects} />
                </Layout>
            </>
        );
    }
}

export default RootIndex;

export const pageQuery = graphql`
    query HomeQuery {
        allContentfulProjects(limit: 10) {
            edges {
                node {
                    title
                    slug
                    client
                    color
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_noBase64
                        }
                        description
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
