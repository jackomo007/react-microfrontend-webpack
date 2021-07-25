import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme/main";

import Product from "./components/Product";

export default () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Product />
      </ThemeProvider>
    </div>
  );
};
