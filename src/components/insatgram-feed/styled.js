import styled from "styled-components";
import { Grid } from "../grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SquareContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 100%;
    margin: ${props => props.theme.spacing.unit / 2}px;
`;

export const InstagramPost = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const PostOverlay = styled(Grid)`
    background: #000;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: opacity ease 0.2s;
    color: #fff;
    &:hover {
        opacity: 0.7;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: ${props => props.theme.spacing.unit * 6}pt;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: ${props => props.theme.spacing.unit * 4}pt;
`;

export const FeedWrapper = styled(Grid)`
    padding: ${props => props.theme.spacing.unit / 2}px;
`;

export const ShowMoreContainer = styled(Grid)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #e0e0e0;
    color: #000;
`;
