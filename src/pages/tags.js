import React from "react";
import _ from "lodash";
import get from "lodash/get";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
// import SEO from "../components/seo";

// // import "../utils/global.scss"
// import "../utils/normalize.css";
// import "../utils/css/screen.css";
class TagIndex extends React.Component {
    // componentDidMount() {
    //     initializeSwiper();
    // }

    render() {
        const tags = get(this, "props.data.allContentfulProjectTags.edges");

        return (
            <Layout>
                {/* <SEO title="Tags" /> */}
                {console.log("tags", tags)}
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

export const TagPageQuery = graphql`
    query TagPageQuery {
        allContentfulProjectTags {
            edges {
                node {
                    id
                    category
                    project_posts {
                        client
                    }
                }
            }
        }
    }
`;

// const indexQuery = graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//         allMarkdownRemark {
//             distinct(field: frontmatter___tags)
//         }
//     }
// `;

export default TagIndex;

// export default (props) => <StaticQuery query={TagPageQuery} render={(data) => <TagIndex props data={data} />} />;
