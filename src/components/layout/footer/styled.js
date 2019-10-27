import { Grid } from "../../grid";
import styled from "styled-components";

export const Root = styled(Grid)`
    background: #000;
    padding-top: ${props => props.theme.spacing.unit * 8}px;
    padding-bottom: ${props => props.theme.spacing.unit * 8}px;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
`;
