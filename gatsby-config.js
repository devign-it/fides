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
        title: "Devign.it — Digital Agecny",
    },
    plugins: [
        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sass",
        "gatsby-plugin-use-dark-mode",
        "gatsby-plugin-offline",
        "gatsby-plugin-transition-link",
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-59635505-2",
            },
        },
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
                name: `Devign.it — Digital Agency`,
                short_name: `Devign.it`,
                start_url: `/`,
                background_color: `#fff`,
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
