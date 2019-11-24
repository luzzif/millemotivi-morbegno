import styled from "styled-components";
import Img from "gatsby-image";
import { Grid } from "../../grid";

export const Root = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: ${props => props.theme.spacing.unit * 4}px;
`;

export const TextContainer = styled(Grid)`
    padding: ${props => props.theme.spacing.unit * 6}px;
    overflow: hidden;
`;

export const Description = styled.p`
    margin-bottom: 0;
    margin-top: ${props => props.theme.spacing.unit * 4}px;
`;

export const Image = styled(Img)`
    width: 100%;
    border-top-left-radius: ${props => props.theme.spacing.unit * 4}px;
    border-top-right-radius: ${props => props.theme.spacing.unit * 4}px;
`;
