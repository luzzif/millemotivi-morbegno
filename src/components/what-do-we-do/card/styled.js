import styled from "styled-components";
import Img from "gatsby-image";
import { Grid } from "../../grid";
import { Title as DefaultTitle } from "../../title";

export const Root = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: ${props => props.theme.spacing.unit * 4}px;
`;

export const Title = styled(DefaultTitle)`
    max-width: 100%;
`;

export const TextContainer = styled(Grid)`
    padding: ${props => props.theme.spacing.unit * 6}px;
`;

export const ImageContainer = styled(Grid)`
    position: relative;
    border-bottom: 1px solid #e0e0e0;
    padding: ${props => props.theme.spacing.unit * 6}px;
    padding-top: 56.25%;
`;

export const Description = styled.p`
    margin-bottom: 0;
    margin-top: ${props => props.theme.spacing.unit * 4}px;
`;

export const Image = styled(Img)`
    border-top-left-radius: ${props => props.theme.spacing.unit * 4}px;
    border-top-right-radius: ${props => props.theme.spacing.unit * 4}px;
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
