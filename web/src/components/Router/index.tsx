import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';
import Loading from 'components/Loading';
import Products from 'pages/Products';

// const Product = lazy(() => import('pages/Product'));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Switch>
          {/* <Route path="not-found" element={<NotFound />} /> */}
          <Route path="/*" component={Products} />
          {/* <Route path="products/:id" element={<Product />} /> */}
        </Switch>
      </ErrorBoundary>
    </Suspense>
  );
}

export default Router;