module.exports = {
    siteMetadata: {
        title: "MilleMotivi Morbegno",
        description: "TODO.",
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
        }
    ]
};
