const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve("./src/templates/BlogPost/index.js");
        const projectPost = path.resolve("./src/templates/ProjectPost/index.js");
        const tagPage = path.resolve(`./src/templates/TagPage/index.js`);

        resolve(
            graphql(
                `
                    {
                        allContentfulBlogPost {
                            edges {
                                node {
                                    title
                                    slug
                                }
                            }
                        }
                        allContentfulProjectPosts {
                            edges {
                                node {
                                    title
                                    slug
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
                const blogPosts = result.data.allContentfulBlogPost.edges;
                const projectTags = result.data.allContentfulProjectTags.edges;

                // const tagSet = new Set();

                // Create project pages
                projectPosts.forEach((post, index) => {
                    // Get tags for tags pages.
                    // if (post.node.categoryTags) {
                    //     post.node.categoryTags.category.forEach((tag) => {
                    //         tagSet.add(tag);
                    //     });
                    // }

                    createPage({
                        path: `/projects/${post.node.slug}/`,
                        component: projectPost,
                        context: {
                            slug: post.node.slug,
                        },
                    });
                });

                // Create blog pages
                blogPosts.forEach((post, index) => {
                    createPage({
                        path: `/blog/${post.node.slug}/`,
                        component: blogPost,
                        context: {
                            slug: post.node.slug,
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
