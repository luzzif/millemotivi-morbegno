import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ lang, meta }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={site.siteMetadata.title}
            meta={[
                {
                    name: `description`,
                    content: site.siteMetadata.description
                },
                {
                    property: `og:title`,
                    content: site.siteMetadata.title
                },
                {
                    property: `og:description`,
                    content: site.siteMetadata.description
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: site.siteMetadata.title
                },
                {
                    name: `twitter:description`,
                    content: site.siteMetadata.description
                }
            ].concat(meta)}
        >
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

Seo.defaultProps = {
    lang: "en",
    meta: [],
    description: ""
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};
