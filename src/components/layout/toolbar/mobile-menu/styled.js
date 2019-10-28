import styled from "styled-components";
import { Grid } from "../../../grid";

export const Root = styled(Grid)`
    padding-top: ${props => props.theme.spacing.props * 2}px;
`;
