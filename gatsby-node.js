const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const projectPost = path.resolve("./src/templates/ProjectPost/index.js");
        const tagPage = path.resolve(`./src/templates/TagPage/index.js`);

        resolve(
            graphql(
                `
                    {
                        allContentfulProjectPosts(sort: { order: DESC, fields: year }) {
                            edges {
                                node {
                                    title
                                    slug
                                    year
                                }
                            }
                        }
                        allContentfulProjectTags {
                            edges {
                                node {
                                    category
                                    slug
                                }
                            }
                        }
                    }
                `,
            ).then((result) => {
                if (result.errors) {
                    throw result.errors;
                }

                const projectPosts = result.data.allContentfulProjectPosts.edges;
                const projectTags = result.data.allContentfulProjectTags.edges;

                // Create project pages
                projectPosts.forEach((post, index) => {
                    const previous = index === projectPosts.length - 1 ? null : projectPosts[index + 1].node;
                    const next = index === 0 ? null : projectPosts[index - 1].node;

                    createPage({
                        path: `/projects/${post.node.slug}/`,
                        component: projectPost,
                        context: {
                            slug: post.node.slug,
                            previous,
                            next,
                        },
                    });
                });

                // Create tags pages.
                projectTags.forEach((post, index) => {
                    createPage({
                        path: `/tags/${post.node.slug}/`,
                        component: tagPage,
                        context: {
                            slug: post.node.slug,
                        },
                    });
                });
            }),
        );
    });
};
