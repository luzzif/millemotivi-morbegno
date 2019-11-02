module.exports = {
    siteMetadata: {
        title: "MorbegnoPrint",
        description:
            "Da Morbegnoprint trovi tuttoMorbegnoPrint... Stampa e personalizzazione, proprio come vuoi tu.",
        author: "@luzzif"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-instagram",
            options: {
                username: "morbegno_millemotivi"
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            }
        },
        "gatsby-plugin-styled-components"
    ]
};
