import React from "react";
import { Grid } from "../../../grid";
import { Item, StyledMobileMenuIcon } from "../styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Root } from "../../footer/styled";

export const MobileMenu = ({ onClose, ...rest }) => (
    <Root container direction="column" align="center" {...rest}>
        <Grid item container direction="column" align="center" spacingRatio={4}>
            <Grid item>
                <Item to="/#what-do-we-do" onClick={onClose}>
                    Cosa facciamo
                </Item>
            </Grid>
            <Grid item>
                <Item to="/#our-socials" onClick={onClose}>
                    I nostri social
                </Item>
            </Grid>
        </Grid>
        <Grid container xs={10} justify="flex-end">
            <Grid item>
                <StyledMobileMenuIcon icon={faTimes} onClick={onClose} />
            </Grid>
        </Grid>
    </Root>
);
