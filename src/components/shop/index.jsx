import React from "react";
import { Grid } from "../grid";
import { CenterAlignedText, SubmitButton } from "./styled";
import { Title } from "../title";

export const Shop = () => {
    return (
        <Grid
            id="shop"
            container
            xs={12}
            align="center"
            direction="column"
            spacingRatio={4}
        >
            <Grid
                item
                container
                xs={10}
                align="center"
                direction="column"
                spacingRatio={4}
            >
                <Grid item>
                    <Title>Negozio</Title>
                </Grid>
                <Grid item>
                    <CenterAlignedText>
                        Scopri ed acquista alcuni dei nostri prodotti
                        selezionati sul nostro nuovo negozio online.
                    </CenterAlignedText>
                </Grid>
                <Grid item>
                    <SubmitButton href="https://shop.morbegnoprint.it">
                        Vai al negozio
                    </SubmitButton>
                </Grid>
            </Grid>
        </Grid>
    );
};
