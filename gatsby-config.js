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
        title: "Fides — Fighting incorrect medical data with Blockchain",
        titleTemplate: "%s | Fides",
        description: "An action-oriented research into the future of healthcare information systems",
        url: "https://www.fides.health", // No trailing slash allowed!
        image: "/og-image.jpg", // Path to your image you placed in the 'static' folder
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
                trackingId: "UA-59635505-4",
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
            resolve: "gatsby-plugin-mailchimp",
            options: {
                endpoint:
                    "https://health.us19.list-manage.com/subscribe/post?u=5fa4943563677b48e28fce8b2&amp;id=cc53b8e8f8", // add your MC list endpoint here; see instructions below
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Fides — Fighting incorrect medical data with Blockchain`,
                short_name: `Fides Health`,
                start_url: `/`,
                background_color: `#ff1053`,
                theme_color: `#ff1053`,
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
