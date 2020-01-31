import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";
import Img from "gatsby-image";

import HomeVisual from "../components/HomeVisual";
import ProjectsRoll from "../components/ProjectsRoll";
import Footer from "../components/Footer";
import AboutPreview from "../components/AboutPreview";
import HomeModal from "../components/HomeModal";
import logoDevignBlack from "../assets/images/devign-logo_horizontal_white.svg";

import "../styles/pages/index.scss";

class RootIndex extends React.Component {
    render() {
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");
        const aboutContent = get(this, "props.data.contentfulAbout");

        return (
            <>
                <Layout showHome={true} showNav={false} location={this.props.location}>
                    <header className="header--container">
                        <div className="logo--home">
                            <img src={logoDevignBlack} alt="Devign.it" />
                        </div>
                        <HomeModal />
                        <HomeVisual />
                    </header>

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
