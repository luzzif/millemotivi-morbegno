import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Toolbar } from "./toolbar";
import { Main } from "./styled";

export const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Toolbar />
        <Main>{children}</Main>
    </ThemeProvider>
);
