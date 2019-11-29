import styled from "styled-components";
import Img from "gatsby-image";
import { Grid } from "../../grid";
import { Title as DefaultTitle } from "../../title";

export const Root = styled(Grid)`
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: ${props => props.theme.spacing.unit * 4}px;
`;

export const Title = styled(DefaultTitle)`
    width: 100%;
`;

export const TextContainer = styled(Grid)`
    width: 100%;
    padding: ${props => props.theme.spacing.unit * 6}px;
`;

export const Description = styled.p`
    width: 100%;
    margin-bottom: 0;
    margin-top: ${props => props.theme.spacing.unit * 4}px;
`;

export const Image = styled(Img)`
    width: 100%;
    max-width: 100%;
    border-top-left-radius: ${props => props.theme.spacing.unit * 4}px;
    border-top-right-radius: ${props => props.theme.spacing.unit * 4}px;
`;
