import styled from "styled-components";
import Img from "gatsby-image";
import { Grid } from "../../grid";

export const Root = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: ${props => props.theme.spacing.unit * 4}px;
    margin-bottom: ${props => props.theme.spacing.unit * 6}px;
`;

export const TextContainer = styled(Grid)`
    padding: ${props => props.theme.spacing.unit * 6}px;
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Description = styled.p`
    margin-bottom: 0;
`;

export const Image = styled(Img)`
    width: 100%;
    border-top-left-radius: ${props => props.theme.spacing.unit * 4}px;
    border-top-right-radius: ${props => props.theme.spacing.unit * 4}px;
`;
