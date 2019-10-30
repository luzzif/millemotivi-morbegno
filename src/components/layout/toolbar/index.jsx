import React, { useState, useEffect } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import {
    Container,
    Item,
    StyledMobileMenuIcon,
    AnimatedMobileMenu
} from "./styled";
import { Grid } from "../../grid";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Hidden } from "../../hidden";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Toolbar = () => {
    let scrollPosition = { x: 0, y: 0 };
    if (typeof window !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        scrollPosition = useWindowScrollPosition();
    }

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

    const [hero, setHero] = useState(scrollPosition && !scrollPosition.y);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setHero(scrollPosition && !scrollPosition.y);
    }, [scrollPosition]);

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <AnimatedMobileMenu
                open={mobileMenuOpen}
                onClose={handleMobileMenuClose}
            />
            <Container
                container
                align="center"
                justify="space-between"
                hero={hero}
            >
                <Grid item>
                    <Image fixed={logoImage.childImageSharp.fixed} />
                </Grid>
                <Hidden smDown>
                    <Grid item container spacingRatio={4}>
                        <Grid item>
                            <Item to="/#what-do-we-do">Cosa facciamo</Item>
                        </Grid>
                        <Grid item>
                            <Item to="/#contact-us">Contattaci</Item>
                        </Grid>
                        <Grid item>
                            <Item to="/#our-socials">Dai nostri social</Item>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid item>
                        <StyledMobileMenuIcon
                            icon={faBars}
                            onClick={handleMobileMenuOpen}
                        />
                    </Grid>
                </Hidden>
            </Container>
        </>
    );
};
