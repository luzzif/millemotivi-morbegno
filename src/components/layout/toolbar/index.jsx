import React, { useState, useEffect } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { Container, Item } from "./styled";
import { Grid } from "../../grid";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

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

    useEffect(() => {
        setHero(scrollPosition && !scrollPosition.y);
    }, [scrollPosition]);

    return (
        <Container container align="center" justify="space-between" hero={hero}>
            <Grid item>
                <Image fixed={logoImage.childImageSharp.fixed} />
            </Grid>
            <Grid item container spacingRatio={4}>
                <Grid container item>
                    <Item to="/#what-do-we-do">Cosa facciamo</Item>
                </Grid>
                <Grid container item>
                    <Item to="/#our-socials">I nostri social</Item>
                </Grid>
            </Grid>
        </Container>
    );
};
