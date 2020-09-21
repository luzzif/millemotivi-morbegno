import styled from "styled-components";

export const SubmitButton = styled.a`
    padding: ${props => props.theme.spacing.unit * 2}px
        ${props => props.theme.spacing.unit * 4}px;
    border-radius: ${props => props.theme.spacing.unit * 4}px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
    background: rgb(239, 124, 0);
    text-decoration: none;
    transition: box-shadow ease 0.3s, background ease 0.3s, color ease 0.3s;
    font-size: ${props => props.theme.spacing.unit * 4}px;
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

export const CenterAlignedText = styled.span`
    text-align: center;
`;
