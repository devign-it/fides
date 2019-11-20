import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../../components/Layout";

export default class TagPageTemplate extends React.Component {
    render() {
        const tag = get(this.props, "data.contentfulProjectTags");
        // const siteTitle = get(this.props, "data.site.siteMetadata.title");

        return (
            <Layout location={this.props.location}>
                <div className="tag-item">#{tag.category}</div>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query ProjectTagBySlug($slug: String!) {
        contentfulProjectTags(slug: { eq: $slug }) {
            category
            slug
        }
    }
`;
