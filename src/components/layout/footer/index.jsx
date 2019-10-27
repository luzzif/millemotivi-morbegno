import React from "react";
import { Root } from "./styled";
import { Grid } from "../../grid";
import { SocialLink } from "../../social-link";
import { Hidden } from "../../hidden";

export const Footer = () => (
    <>
        <Hidden smDown>
            <Root container justify="center">
                <Grid item container xs={11} sm={10} justify="space-between">
                    <Grid item container direction="column" spacingRatio={2}>
                        <Grid item>
                            © 2019 Morbegnoprint S.R.L. all rights reserved
                        </Grid>
                        <Grid item>Via San Rocco 62, 23017, Morbegno</Grid>
                        <Grid item>P.IVA: 01011630140</Grid>
                        <Grid item>Telefono: +39 0342 1856456</Grid>
                        <Grid item>E-mail: morbegnoprint@gmail.com</Grid>
                        <Grid item>
                            Website made by Federico Luzzi -
                            fedeluzzi00@gmail.com
                        </Grid>
                    </Grid>
                    <Grid item container spacingRatio={4} direction="column">
                        <Grid item>
                            <SocialLink type="facebook" />
                        </Grid>
                        <Grid item>
                            <SocialLink type="instagram" />
                        </Grid>
                    </Grid>
                </Grid>
            </Root>
        </Hidden>
        <Hidden smUp>
            <Root container justify="center">
                <Grid
                    item
                    container
                    xs={11}
                    justify="space-between"
                    direction="column"
                    spacingRatio={6}
                >
                    <Grid
                        item
                        container
                        direction="column"
                        spacingRatio={2}
                        xs={12}
                        align="center"
                    >
                        <Grid item>Via San Rocco 62, 23017, Morbegno</Grid>
                        <Grid item>P.IVA: 01011630140</Grid>
                        <Grid item>Telefono: +39 0342 1856456</Grid>
                        <Grid item>E-mail: morbegnoprint@gmail.com</Grid>
                        <Grid item>© 2019 Morbegnoprint S.R.L.</Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        spacingRatio={4}
                        xs={12}
                        justify="center"
                    >
                        <Grid item>
                            <SocialLink type="facebook" />
                        </Grid>
                        <Grid item>
                            <SocialLink type="instagram" />
                        </Grid>
                    </Grid>
                </Grid>
            </Root>
        </Hidden>
    </>
);
