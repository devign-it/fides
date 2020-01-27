import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";
import Img from "gatsby-image";

import AnimatedQuote from "../components/AnimatedQuote";
import ProjectsRoll from "../components/ProjectsRoll";
import Footer from "../components/Footer";
import AboutPreview from "../components/AboutPreview";

import logoDevignBlack from "../assets/images/devign-logo_horizontal.svg";

import "../styles/pages/index.scss";

class RootIndex extends React.Component {
    render() {
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");
        const aboutContent = get(this, "props.data.contentfulAbout");

        return (
            <>
                <Layout
                    showHome={true}
                    showNav={false}
                    stickyNav={true}
                    showResume={false}
                    location={this.props.location}
                >
                    <div className="modal-info">
                        <div className="info-modal--text-container">
                            <div className="text-container--logo">
                                <img src={logoDevignBlack} alt="Devign.it" />
                            </div>
                            <p className="text-container--text">
                                Digital agency focused on digital product development & brand and experience design
                                since 2014. Curious to see some work? Get in touch. Don't be shy.
                            </p>

                            <a href="mailto:info@devign.it" className="info-modal--button">
                                <span>Get in touch</span>
                            </a>
                        </div>
                    </div>

                    <AnimatedQuote></AnimatedQuote>

                    {/* <AnimatedQuote>
                    Untangling complex problems with human-designed technology is what I like and do
                </AnimatedQuote>
         
                    <section className="section--selected-projects">
                        <div className="section--heading">
                            <h2 className="title">Selected projects</h2>
                            <p className="subtitle">Portfolio 2020</p>
                        </div>
                        <ProjectsRoll items={posts} showButton={true} />
                    </section>
                    <AboutPreview source={aboutContent} />
                    <Footer mode={"ghost"} showInternalLinks={false} /> */}
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
