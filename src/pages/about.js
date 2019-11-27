import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import get from "lodash/get";
import SocialLinks from "../components/SocialLinks";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CapabilityScroll from "../components/CapabilityScroll";
import Footer from "../components/Footer";
import ExternalLink from "../components/ExternalLink";

import "../styles/layouts/about.scss";
import "../templates/ProjectPost/styles.scss";

import AboutImage from "../components/AboutImage";

class AboutIndex extends React.Component {
    render() {
        const aboutContent = get(this, "props.data.contentfulAbout");
        // console.log("image", aboutContent.image.fluid);

        return (
            <Layout location={this.props.location} showNav={true} showHome={true}>
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
                                <ExternalLink URL="#" text="Download resume" internalPage={true} alignRight={true} />
                            </div>
                            <SocialLinks />
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
                <Footer mode="light" />
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
    }
`;
