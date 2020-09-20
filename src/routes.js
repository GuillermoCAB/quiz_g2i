import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// THEME
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

// PAGES
import Main from "./pages/Main";

const Routes = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
);

export default Routes;