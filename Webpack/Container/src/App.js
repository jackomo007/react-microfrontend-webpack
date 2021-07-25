import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import RemoteHeader from './components/RemoteHeader';
import RemoteProduct from './components/RemoteProduct';
import theme from "./theme/main";

export default () => {
    return <>
    <h1>Container Content</h1>
    <hr></hr>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RemoteHeader />
        <RemoteProduct />
      </ThemeProvider>
    </>
};