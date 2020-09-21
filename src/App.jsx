/**
 * @description Main component.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import './app.scss';

const App = () => (
  <div className="app">
    <Switch>
      { routes.map(route => (
        <Route
          path={route.path}
          render={routeProps => (
            <route.component {...routeProps} />
          )}
          key={JSON.stringify(route)} />
      ))
      }
    </Switch>
  </div>
);

export default App;
