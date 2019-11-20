import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "./styles.scss";

export default class ProjectPostTemplate extends React.Component {
    render() {
        const post = get(this.props, "data.contentfulProjectPosts");
        const siteTitle = get(this.props, "data.site.siteMetadata.title");

        return (
            <Layout showNav={false} location={this.props.location}>
                <div className="project--wrapper">
                    <Helmet title={`${post.client} | ${siteTitle}`} />
                    <header className="project--hero" style={{ backgroundColor: `${post.color}` }}>
                        <div className="background-image">
                            <Img alt={post.title} fluid={post.heroImage.fluid} />
                        </div>
                    </header>
                    <div className="project--metadata">
                        <div className="metadata--item">
                            <h5 style={{ color: `${post.color}` }}>Project</h5>
                            <p>{post.client}</p>
                        </div>
                        <div className="metadata--item">
                            <h5 style={{ color: `${post.color}` }}>Type</h5>
                            <p>{post.type}</p>
                        </div>
                        <div className="metadata--item">
                            <h5 style={{ color: `${post.color}` }}>Year</h5>
                            <p>{post.year}</p>
                        </div>
                        <div className="metadata--item">
                            <h5 style={{ color: `${post.color}` }}>Role</h5>
                            <p>{post.role}</p>
                        </div>
                    </div>

                    <div className="project--content">
                        <section className="content--head">
                            <div className="head--title">
                                <h1 className="section-headline">{post.title}</h1>
                            </div>
                            <div className="head--tags">
                                <div className="tags--wrapper">
                                    {post.categoryTags.map(({ node }, i) => (
                                        <span className="categoryTag">
                                            <p>{post.categoryTags[i].category}</p>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <aside className="head--sidebar">
                                <div className="sidebar--sticky-content">
                                    <a
                                        className="link-button__inline"
                                        href={`${post.linkUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {post.linkText}
                                    </a>
                                </div>
                            </aside>
                            <article className="head--description">
                                <div>{documentToReactComponents(post.extensiveDescription.json)}</div>
                            </article>
                        </section>
                        <section className="content--body">
                            {post.showcaseImages.map(({ node }, i) => (
                                <div className="body--showcase-item">
                                    <Img
                                        key={i}
                                        className="showcase-item-image"
                                        alt={post.showcaseImages.description}
                                        fluid={post.showcaseImages[i].fluid}
                                    />
                                    {post.showcaseImages[i].title && post.showcaseImages[i].description ? (
                                        <div className="showcase-item--description">
                                            <h4>{post.showcaseImages[i].title}</h4>
                                            <p className="project-item--description small--text">
                                                {post.showcaseImages[i].description}
                                            </p>
                                        </div>
                                    ) : (
                                        ``
                                    )}
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </Layout>
        );
    }
}

export const ProjectPostQuery = graphql`
    query ProjectPostBySlug($slug: String!) {
        contentfulProjectPosts(slug: { eq: $slug }) {
            title
            client
            color
            type
            role
            year
            linkText
            linkUrl
            heroImage {
                fluid(maxWidth: 1280) {
                    ...GatsbyContentfulFluid_noBase64
                }
            }
            extensiveDescription {
                json
            }
            categoryTags {
                category
            }
            showcaseImages {
                title
                description
                fluid(maxWidth: 1280) {
                    ...GatsbyContentfulFluid_noBase64
                }
            }
        }
    }
`;
