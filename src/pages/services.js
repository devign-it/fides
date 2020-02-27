import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import get from "lodash/get";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CapabilityScroll from "../components/CapabilityScroll";
import ServicesRoll from "../components/ServicesRoll";

import Footer from "../components/Footer";
import ExternalLink from "../components/ExternalLink";

import "../styles/pages/services.scss";
import "../templates/ProjectPost/styles.scss";

import servicesHeading from "../assets/images/services/heading.svg";

class AboutIndex extends React.Component {
    render() {
        const aboutContent = get(this, "props.data.contentfulAbout");
        const services = get(this, "props.data.allContentfulServices.edges");

        const workExperience = get(this, "props.data.allContentfulWorkExperiences.edges");
        const teachingExperience = get(this, "props.data.allContentfulTeachingExperiences.edges");
        const educationExperience = get(this, "props.data.allContentfulEducationExperiences.edges");

        return (
            <Layout location={this.props.location} showNav={true} showHome={true}>
                <div className="service-page--wrapper">
                    <Helmet title={`Services | Devign.it`} />
                    <section className="section--services">
                        <div className="services--heading">
                            <img src={servicesHeading} alt="services" />
                        </div>
                        <section className="capabilities--wrapper">
                            <CapabilityScroll
                                dataSourceFirst={aboutContent.capabilitiesServices}
                                dataSourceSecond={aboutContent.deliverables}
                                dataSourceThird={aboutContent.capabilitiesTechnologies}
                                nameFirst="Services"
                                nameSecond="Deliverables"
                                nameThird="Technologies"
                            />
                        </section>
                        <ServicesRoll items={services} />
                    </section>
                    <Footer mode={"light"} showInternalLinks={false} />
                </div>
            </Layout>
        );
    }
}

export default AboutIndex;

export const pageQuery = graphql`
    query ServicesQuery {
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
            deliverables
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
