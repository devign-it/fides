import React from "react";
import _ from "lodash";
import get from "lodash/get";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

class TagIndex extends React.Component {
    render() {
        const tags = get(this, "props.data.allContentfulProjectTags.edges");

        return (
            <Layout>
                <header className="tag-page-head">
                    <h1 className="page-head-title">Tags({tags.length})</h1>
                </header>
                <div className="tag-container">
                    {tags.map(({ node }) => {
                        let tag = node.category;

                        return (
                            <Link key={tag} style={{ textDecoration: "none" }} to={`/tags/${_.kebabCase(tag)}`}>
                                <div className="tag-item">#{tag}</div>
                            </Link>
                        );
                    })}
                </div>
            </Layout>
        );
    }
}

export const TagIndexPageQuery = graphql`
    query TagIndexPageQuery {
        allContentfulProjectTags {
            edges {
                node {
                    category
                    slug
                }
            }
        }
    }
`;

export default TagIndex;
