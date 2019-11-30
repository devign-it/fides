import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import get from "lodash/get";
import SocialLinks from "../components/SocialLinks";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CapabilityScroll from "../components/CapabilityScroll";
import ExperienceScroll from "../components/ExperienceScroll";

import Footer from "../components/Footer";
import ExternalLink from "../components/ExternalLink";

import "../styles/layouts/about.scss";
import "../templates/ProjectPost/styles.scss";

import AboutImage from "../components/AboutImage";

class AboutIndex extends React.Component {
    componentDidMount() {
        //  function checkDarkMode() {
        //     if (document.body.classList.contains("dark-mode")) {
        //         return true;
        //     }
        // };
    }
    render() {
        const aboutContent = get(this, "props.data.contentfulAbout");
        const workExperience = get(this, "props.data.allContentfulWorkExperiences.edges");
        const teachingExperience = get(this, "props.data.allContentfulTeachingExperiences.edges");
        const educationExperience = get(this, "props.data.allContentfulEducationExperiences.edges");

        return (
            <Layout location={this.props.location} showNav={true} stickyNav={true} showHome={true}>
                <div className="about-page--wrapper">
                    <Helmet title={`About | Daan van der Zwaag`} />

                    <div className="about--introduction">
                        <div className="introduction--image">
                            <AboutImage
                                topImage={aboutContent.topImage.fluid}
                                bottomImage={aboutContent.bottomImage.fluid}
                            ></AboutImage>
                        </div>

                        <div className="introduction--text">
                            {documentToReactComponents(aboutContent.extensiveDescription.json)}
                        </div>
                    </div>
                    <aside className="about--sidebar">
                        <div className="sidebar--sticky-content">
                            <div className="top--content">
                                <div className="internal--links">
                                    <ExternalLink
                                        URL="../resume-daanvanderzwaag_2019-2020.pdf"
                                        text="Download resume"
                                        internalPage={true}
                                        alignRight={true}
                                    />
                                </div>

                                <div className="external--links">
                                    <ExternalLink
                                        URL="#"
                                        text="Read Bachelor thesis"
                                        internalPage={false}
                                        alignRight={true}
                                    />
                                    <ExternalLink
                                        URL="#"
                                        text="Visit Devign.it website"
                                        internalPage={false}
                                        alignRight={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </aside>
                    <section className="capabilities--wrapper">
                        <div className="capabilities__services">
                            <CapabilityScroll dataSource={aboutContent.capabilitiesServices} name="Services" />
                        </div>
                        <div className="capabilities__technologies">
                            <CapabilityScroll dataSource={aboutContent.capabilitiesTechnologies} name="Technologies" />
                        </div>
                    </section>
                </div>
                <section className="experiences--wrapper">
                    <ExperienceScroll dataSource={workExperience} name="Work" />
                    <ExperienceScroll dataSource={teachingExperience} name="Teaching" />
                    <ExperienceScroll dataSource={educationExperience} name="Education" />
                </section>
                {/* <Footer mode={checkDarkMode() ? "light" : "dark"} showInternalLinks={true} /> */}
                <Footer mode={"light"} showInternalLinks={true} />
            </Layout>
        );
    }
}

export default AboutIndex;

export const pageQuery = graphql`
    query AboutQuery {
        contentfulAbout {
            extensiveDescription {
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
            capabilitiesServices
            capabilitiesTechnologies
        }
        allContentfulWorkExperiences(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    period
                    location
                    description {
                        json
                    }
                    companyName
                    title
                }
            }
        }
        allContentfulTeachingExperiences(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    title
                    headline
                    description {
                        json
                    }
                    period
                    location
                    companyName
                }
            }
        }
        allContentfulEducationExperiences(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    title
                    location
                    description {
                        json
                    }
                    period
                }
            }
        }
    }
`;
