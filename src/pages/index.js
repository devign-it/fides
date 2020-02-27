import React from "react";
import { graphq, Link } from "gatsby";
import get from "lodash/get";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { ButtonInline } from "../components/Buttons";

import HomeVisual from "../components/HomeVisual";
import ProjectsRoll from "../components/ProjectsRoll";
import ServicesRoll from "../components/ServicesRoll";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import HomeModal from "../components/HomeModal";

import "../styles/pages/index.scss";

class RootIndex extends React.Component {
    render() {
        const posts = get(this, "props.data.allContentfulProjectPosts.edges");
        const services = get(this, "props.data.allContentfulServices.edges");
        const aboutContent = get(this, "props.data.contentfulAbout");

        return (
            <>
                <Layout showHome={true} showNav={false} location={this.props.location}>
                    <Navigation />
                    <header className="header--container">
                        <HomeModal />
                        <HomeVisual />
                    </header>
                    <section className="section--about">
                        <div className="about--info">
                            <h2>
                                We create digital products that are both functional and beautiful. We strive to make
                                technology more human and humans more technological.
                            </h2>
                            <ButtonInline internal text="Learn more about us" to="/about" />
                        </div>
                    </section>
                    <section className="section--selected-projects">
                        <div className="section--heading">
                            <h2 className="title">Selected projects</h2>
                        </div>
                        <ProjectsRoll items={posts} showButton={true} />
                    </section>
                    <section className="section--services">
                        <ServicesRoll items={services} />
                    </section>
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
        allContentfulServices(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    title
                    text {
                        text
                    }
                    icon {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`;
