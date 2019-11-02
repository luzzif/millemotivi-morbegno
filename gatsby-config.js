module.exports = {
    siteMetadata: {
        title: "Morbegnoprint | Stampa e personalizzazione",
        description:
            "Da Morbegnoprint trovi tutto quello che desideri sul mondo della stampa digitale. Morbegnoprint... stampa e personalizzazione, proprio come vuoi tu.",
        author: "@luzzif",
        siteUrl: "https://www.morbegnoprint.it"
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
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sitemap"
    ]
};
