import React, {Suspense} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme/main";

import ErrorBoundary from "./ErrorBoundary"

const RemoteHeader = React.lazy(() => import("./components/RemoteHeader"));
const RemoteProduct = React.lazy(() => import("./components/RemoteProduct"));

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <Suspense fallback={<div>Carregando...</div>}>
            <RemoteHeader />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div>Carregando...</div>}>
            <RemoteProduct />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};
