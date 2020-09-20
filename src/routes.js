import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// THEME
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

// PAGES
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const Routes = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/result" component={Result} />
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
);

export default Routes;