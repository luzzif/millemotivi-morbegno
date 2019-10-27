import { Grid } from "../grid";
import styled from "styled-components";

export const Root = styled(Grid)`
    padding-top: ${props => props.theme.spacing.unit * 8}px;
    padding-bottom: ${props => props.theme.spacing.unit * 8}px;
`;
