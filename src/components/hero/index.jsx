import React from "react";
import {
    Overlay,
    Subtitle,
    Logo,
    RootGrid,
    WritingsGrid,
    SocialsContainer,
    BackgroundImage
} from "./styled";
import { SocialLink } from "../social-link";
import { Grid } from "../grid";
import { useStaticQuery, graphql } from "gatsby";
import logoImage from "../../images/logo.svg";

export const Hero = () => {
    const { heroImage } = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <RootGrid container direction="column" justify="center" align="center">
            <BackgroundImage fluid={heroImage.childImageSharp.fluid} />
            <Overlay />
            <WritingsGrid
                item
                container
                direction="column"
                align="center"
                justify="center"
                spacingRatio={4}
                xs={11}
            >
                <Grid item xs={10} sm={8} md={4}>
                    <Logo src={logoImage} />
                </Grid>
                <Grid item>
                    <Subtitle>
                        <i>Per una stampa perfetta, MilleMotivi ti aspetta!</i>
                    </Subtitle>
                </Grid>
                <SocialsContainer item container spacingRatio={4}>
                    <Grid item>
                        <SocialLink type="facebook" />
                    </Grid>
                    <Grid item>
                        <SocialLink type="instagram" />
                    </Grid>
                </SocialsContainer>
            </WritingsGrid>
        </RootGrid>
    );
};
