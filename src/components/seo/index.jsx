import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = () => {
    const { site, favicon16, favicon32, favicon64 } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
                favicon16: file(relativePath: { eq: "favicon/16.png" }) {
                    childImageSharp {
                        fixed(height: 16) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                favicon32: file(relativePath: { eq: "favicon/32.png" }) {
                    childImageSharp {
                        fixed(height: 32) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                favicon64: file(relativePath: { eq: "favicon/64.png" }) {
                    childImageSharp {
                        fixed(height: 64) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );

    return (
        <Helmet
            htmlAttributes={{
                lang: "it"
            }}
            title={site.siteMetadata.title}
            link={[
                {
                    rel: "shortcut icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: `${favicon16.childImageSharp.fixed.base64}`
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: `${favicon32.childImageSharp.fixed.base64}`
                },
                {
                    rel: "shortcut icon",
                    type: "image/png",
                    href: `${favicon64.childImageSharp.fixed.base64}`
                },
                {
                    href:
                        "https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap",
                    rel: "stylesheet"
                }
            ]}
            meta={[
                {
                    name: `description`,
                    content: site.siteMetadata.description
                },
                {
                    name: "keywords",
                    content:
                        "morbegnoprint, digital, printing, stampa, digitale"
                }
            ]}
        />
    );
};
