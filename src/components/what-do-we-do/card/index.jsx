import React from "react";
import PropTypes from "prop-types";
import { Grid } from "../../grid";
import { Title, Root, Description, Image, TextContainer } from "./styled";

export const Card = ({ image, title, description }) => (
    <Root container direction="column" spacingRatio={8}>
        <Grid item xs={12}>
            <Image sizes={{ ...image, aspectRatio: 4 / 3 }} />
        </Grid>
        <TextContainer
            item
            container
            direction="column"
            xs={12}
            spacingRatio={4}
        >
            <Title>{title}</Title>
            <Description>{description}</Description>
        </TextContainer>
    </Root>
);

Card.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
