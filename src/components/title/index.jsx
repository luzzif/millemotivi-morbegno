import styled from "styled-components";
import PropTypes from "prop-types";

export const Title = styled.h1`
    margin: 0;
    font-size: ${props => props.theme.spacing.unit * (props.small ? 6 : 9)}px;
`;

Title.propTypes = {
    small: PropTypes.bool
};
