import styled from "styled-components";
import { Grid } from "../grid";
import Img from "gatsby-image";

export const RootGrid = styled(Grid)`
    width: 100%;
    height: 100vh;
    position: relative;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const BackgroundImage = styled(Img)`
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const WritingsGrid = styled(Grid)`
    z-index: 1;
`;

export const Logo = styled.img`
    margin-bottom: ${props => props.theme.spacing.unit * 4}px;
    height: 100%;
    width: ${props => props.theme.spacing.unit * 120}px;
`;

export const Subtitle = styled.h2`
    color: #fff;
    font-size: ${props => props.theme.spacing.unit * 6}pt;
    margin-top: 0;
    margin-bottom: ${props => props.theme.spacing.unit * 4}px;
`;

export const SocialsContainer = styled(Grid)`
    margin-top: ${props => props.theme.spacing.unit * 16}px;
`;
