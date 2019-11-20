import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../../components/Layout";

export default class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this.props, "data.contentfulBlogPost");
        const siteTitle = get(this.props, "data.site.siteMetadata.title");

        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet title={`${post.title} | ${siteTitle}`} />
                    <div>
                        <Img alt={post.title} fluid={post.heroImage.fluid} />
                    </div>
                    <div className="wrapper">
                        <h1 className="section-headline">{post.title}</h1>
                        <p
                            style={{
                                display: "block",
                            }}
                        >
                            {post.publishDate}
                        </p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.body.childMarkdownRemark.html,
                            }}
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}

export const BlogPostPage = graphql`
    query BlogPostBySlug($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishDate(formatString: "MMMM Do, YYYY")
            heroImage {
                fluid(maxWidth: 1180) {
                    ...GatsbyContentfulFluid_noBase64
                }
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;
