import React, { useState, useEffect } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { Container, Item } from "./styled";
import { Grid } from "../../grid";

export const Toolbar = () => {
    const scrollPosition = useWindowScrollPosition();

    const [hero, setHero] = useState(scrollPosition && !scrollPosition.y);

    useEffect(() => {
        setHero(scrollPosition && !scrollPosition.y);
    }, [scrollPosition]);

    return (
        <Container container align="center" justify="flex-end" hero={hero}>
            <Grid container item>
                <Item to="/#what-do-we-do">Cosa facciamo</Item>
            </Grid>
        </Container>
    );
};
