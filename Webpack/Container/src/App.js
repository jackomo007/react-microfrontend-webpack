import React, {Suspense} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
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
          <Suspense fallback={<Skeleton variant="rect" width='100%' height={60} />}>
            <RemoteHeader />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<Skeleton style={{marginTop: '20px'}} variant="rect" width={345} height={462} />}>
            <RemoteProduct />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};
