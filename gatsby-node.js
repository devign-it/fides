const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve("./src/templates/blog-post.js");
        const projectPost = path.resolve("./src/templates/project-post.js");

        resolve(
            graphql(
                `
                    {
                        allContentfulProjectPost {
                            edges {
                                node {
                                    title
                                    slug
                                }
                            }
                        }
                    }
                `,
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const projectPosts = result.data.allContentfulProjectPost.edges;

                projectPosts.forEach((post, index) => {
                    createPage({
                        path: `/projects/${post.node.slug}/`,
                        component: projectPost,
                        context: {
                            slug: post.node.slug,
                        },
                    });
                });
            }),
        );

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
                    }
                `,
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const blogPosts = result.data.allContentfulBlogPost.edges;

                blogPosts.forEach((post, index) => {
                    createPage({
                        path: `/blog/${post.node.slug}/`,
                        component: blogPost,
                        context: {
                            slug: post.node.slug,
                        },
                    });
                });
            }),
        );
    });
};
