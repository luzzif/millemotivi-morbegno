import React from "react";
import { Card } from "./card";
import { Grid } from "../grid";
import { useStaticQuery, graphql } from "gatsby";
import { Root } from "./styled";

export const WhatWeCanDoForYou = () => {
    const { placeholderImage } = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Root
            id="what-do-we-do"
            container
            xs={12}
            align="center"
            direction="column"
            spacingRatio={4}
        >
            <Grid item>
                <h1>Cosa facciamo</h1>
            </Grid>
            <Grid item container spacingRatio={8} xs={11} sm={8}>
                <Grid item xs={12} sm={4}>
                    <Card
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        image={placeholderImage.childImageSharp.fluid}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        image={placeholderImage.childImageSharp.fluid}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        image={placeholderImage.childImageSharp.fluid}
                    />
                </Grid>
            </Grid>
        </Root>
    );
};
