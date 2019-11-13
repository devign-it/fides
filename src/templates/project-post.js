import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../components/layout";

export default class ProjectPostTemplate extends React.Component {
    render() {
        const post = get(this.props, "data.contentfulProjectPost");
        const siteTitle = get(this.props, "data.site.siteMetadata.title");

        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet title={`${post.title} | ${siteTitle}`} />
                    <div>
                        <Img alt={post.title} fluid={post.featuredImage.fluid} />
                    </div>
                    <div className="wrapper">
                        <h1 className="section-headline">{post.title}</h1>
                        <p
                            style={{
                                display: "block",
                            }}
                        >
                            {/* {post.publishDate} */}
                        </p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.description.childMarkdownRemark.html,
                            }}
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query ProjectPostBySlug($slug: String!) {
        contentfulProjectPost(slug: { eq: $slug }) {
            title
            featuredImage {
                fluid(maxWidth: 1280) {
                    ...GatsbyContentfulFluid_noBase64
                }
            }
            description {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;
