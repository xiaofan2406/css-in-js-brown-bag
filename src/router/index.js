import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'components';
import { asyncLoad } from 'hocs';
import { ROUTES } from 'configs';

import Home from './Home';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            path={ROUTES.HOME.path}
            exact={ROUTES.HOME.exact}
            component={Home}
          />
          <Route
            path={ROUTES.JSS.path}
            exact={ROUTES.JSS.exact}
            component={asyncLoad({
              importer: () => import(/* webpackChunkName: "Jss" */ './Jss')
            })}
          />
          <Route
            path={ROUTES.STYLED_COMPONENTS.path}
            exact={ROUTES.STYLED_COMPONENTS.exact}
            component={asyncLoad({
              importer: () =>
                import(/* webpackChunkName: "StyledComponents" */ './StyledComponents')
            })}
          />
          <Route
            path={ROUTES.EMOTION.path}
            exact={ROUTES.EMOTION.exact}
            component={asyncLoad({
              importer: () =>
                import(/* webpackChunkName: "Emotion" */ './Emotion')
            })}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
