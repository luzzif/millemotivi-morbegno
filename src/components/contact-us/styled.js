import styled from "styled-components";
import { Grid } from "../grid";

export const Input = styled.input`
    width: 100%;
    padding: ${props => props.theme.spacing.unit * 4}px
        ${props => props.theme.spacing.unit * 6}px;
    border: 1px solid #e0e0e0;
    border-radius: ${props => props.theme.spacing.unit * 4}px;
    font-size: ${props => props.theme.spacing.unit * 4}px;
    ::placeholder {
        color: #000;
        font-family: Montserrat;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: ${props => props.theme.spacing.unit * 4}px
        ${props => props.theme.spacing.unit * 6}px;
    border: 1px solid #e0e0e0;
    border-radius: ${props => props.theme.spacing.unit * 4}px;
    font-size: ${props => props.theme.spacing.unit * 4}px;
    ::placeholder {
        color: #000;
        font-family: Montserrat;
    }
`;

export const StyledLink = styled.a`
    color: rgb(239, 124, 0);
    font-weight: 700;
    font-style: italic;
`;

export const SubmitButton = styled.button`
    padding: ${props => props.theme.spacing.unit * 2}px
        ${props => props.theme.spacing.unit * 4}px;
    border-radius: ${props => props.theme.spacing.unit * 4}px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
    background: rgb(239, 124, 0);
    text-decoration: none;
    transition: box-shadow ease 0.3s, background ease 0.3s, color ease 0.3s;
    font-size: ${props => props.theme.spacing.unit * 4}px;
    font-family: Montserrat;
    border: none;
    :hover:not(:disabled) {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
    :disabled {
        background: #e0e0e0;
        color: #757575;
    }
`;

export const TextGrid = styled(Grid)`
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        text-align: center;
    }
`;
