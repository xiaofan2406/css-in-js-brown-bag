import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
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
            path={ROUTES.EMOTION.path}
            exact={ROUTES.EMOTION.exact}
            component={asyncLoad({
              importer: () =>
                import(/* webpackChunkName: "Emotion" */ './Emotion')
            })}
          />
          <Route
            path={ROUTES.EMOTION_CSS_VAR.path}
            exact={ROUTES.EMOTION_CSS_VAR.exact}
            component={asyncLoad({
              importer: () =>
                import(/* webpackChunkName: "Emotion CSS Var" */ './EmotionCSSVar')
            })}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
