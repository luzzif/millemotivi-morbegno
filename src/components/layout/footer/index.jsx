import React from "react";
import { Root, ContactsSubtitle, StyledLink } from "./styled";
import { Grid } from "../../grid";
import { SocialLink } from "../../social-link";
import { Hidden } from "../../hidden";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

export const Footer = () => {
    const { logoImage } = useStaticQuery(graphql`
        query {
            logoImage: file(relativePath: { eq: "logo-mini.png" }) {
                childImageSharp {
                    fixed(height: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <>
            <Hidden mdDown>
                <Root container justify="center">
                    <Grid
                        item
                        container
                        xs={11}
                        sm={10}
                        justify="space-between"
                        align="center"
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            spacingRatio={2}
                        >
                            <Grid item>
                                <ContactsSubtitle>CONTATTI</ContactsSubtitle>
                            </Grid>
                            <Grid item>
                                <strong>Sede legale</strong>: Via San Rocco 62,
                                23017, Morbegno
                            </Grid>
                            <Grid item>
                                <strong>Partita IVA</strong>: 01011630140
                            </Grid>
                            <Grid item>
                                <strong>Telefono</strong>:{" "}
                                <StyledLink href="tel:+390342601203">
                                    +39 0342 601203
                                </StyledLink>
                            </Grid>
                            <Grid item>
                                <strong>E-mail</strong>:{" "}
                                <StyledLink href="mailto:morbegnoprint@gmail.com">
                                    morbegnoprint@gmail.com
                                </StyledLink>
                            </Grid>
                            <Grid item>
                                <strong>© 2019 Morbegnoprint S.R.L.</strong>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            spacingRatio={6}
                            direction="column"
                            align="flex-end"
                        >
                            <Grid item>
                                <SocialLink type="facebook" />
                            </Grid>
                            <Grid item>
                                <SocialLink type="instagram" />
                            </Grid>
                            <Grid item>
                                <Image
                                    fixed={logoImage.childImageSharp.fixed}
                                    alt="Extended logo"
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                spacingRatio={2}
                                align="flex-end"
                                direction="column"
                            >
                                <Grid item>
                                    <strong>Website by Federico Luzzi</strong>
                                </Grid>
                                <Grid item>
                                    <StyledLink href="mailto:fedeluzzi00@gmail.com">
                                        fedeluzzi00@gmail.com
                                    </StyledLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Root>
            </Hidden>
            <Hidden mdUp>
                <Root container justify="center">
                    <Grid
                        item
                        container
                        xs={12}
                        justify="space-between"
                        direction="column"
                        spacingRatio={6}
                        align="center"
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            spacingRatio={2}
                            xs={12}
                            align="center"
                        >
                            <Grid item>
                                <ContactsSubtitle>CONTATTI</ContactsSubtitle>
                            </Grid>
                            <Grid item>
                                <strong>Sede legale</strong>:
                            </Grid>
                            <Grid item>Via San Rocco 62, 23017, Morbegno</Grid>
                            <Grid item>
                                <strong>Partita IVA</strong>: 01011630140
                            </Grid>
                            <Grid item>
                                <strong>Telefono</strong>:{" "}
                                <StyledLink href="tel:+390342601203">
                                    +39 0342 601203
                                </StyledLink>
                            </Grid>
                            <Grid item>
                                <strong>E-mail</strong>:{" "}
                            </Grid>
                            <Grid>
                                <StyledLink href="mailto:morbegnoprint@gmail.com">
                                    morbegnoprint@gmail.com
                                </StyledLink>
                            </Grid>
                            <Grid item>
                                <strong>© 2019 Morbegnoprint S.R.L.</strong>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            direction="column"
                            container
                            spacingRatio={4}
                            xs={12}
                            align="center"
                        >
                            <Grid item>
                                <SocialLink type="facebook" />
                            </Grid>
                            <Grid item>
                                <SocialLink type="instagram" />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Image
                                fixed={logoImage.childImageSharp.fixed}
                                alt="Mini logo"
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            spacingRatio={4}
                            align="center"
                            direction="column"
                        >
                            <Grid item>
                                <strong>Website made by Federico Luzzi</strong>
                            </Grid>
                            <Grid item>
                                <strong>E-mail</strong>:{" "}
                                <StyledLink href="mailto:fedeluzzi00@gmail.com">
                                    fedeluzzi00@gmail.com
                                </StyledLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Root>
            </Hidden>
        </>
    );
};
