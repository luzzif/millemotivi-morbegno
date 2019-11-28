import React from "react";
import PropTypes from "prop-types";
import {
    Root,
    Description,
    Image,
    TextContainer,
    ImageContainer
} from "./styled";
import { Title } from "./styled";

export const Card = ({ image, title, description }) => (
    <Root container direction="column" spacingRatio={8}>
        <ImageContainer item xs={12}>
            <Image fluid={image} alt="Card header image" />
        </ImageContainer>
        <TextContainer
            item
            container
            direction="column"
            xs={12}
            spacingRatio={4}
        >
            <Title small>{title}</Title>
            <Description>{description}</Description>
        </TextContainer>
    </Root>
);

Card.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
