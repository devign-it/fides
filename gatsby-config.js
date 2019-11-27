require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
    throw new Error("Contentful spaceId and the access token need to be provided.");
}

module.exports = {
    siteMetadata: {
        title: "Daan van der Zwaag → Design Technologist",
    },
    plugins: [
        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sass",
        "gatsby-plugin-use-dark-mode",
        "gatsby-plugin-offline",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Daan van der Zwaag - Portfolio 2020`,
                short_name: `Daan van der Zwaag`,
                start_url: `/`,
                background_color: `#000`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/images/favicons/favicon.png`,
            },
        },
        {
            resolve: "gatsby-source-contentful",
            options: contentfulConfig,
        },
    ],
};
