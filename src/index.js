import React from "react";
import ReactDOM from "react-dom";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import SyntheticEventDemo from "./synthetic-event-demo/SyntheticEventDemo";
import DeclarativeVsImperativeDemo from "./declarative-vs-imperative-demo/DeclarativeVsImperativeDemo";
import UsingWebComponentsDemo from "./using-web-components-demo/UsingWebComponentsDemo";
import PassingNonScalarDataDemo from "./passing-non-scalar-data/PassingNonScalarDataDemo";
import StencilVsPlainWebComponentDemo from "./stencil-vs-plain-web-component-demo/StencilVsPlainWebComponentDemo";

import { applyPolyfills, defineCustomElements } from '@eusbolh/stencil-test-component/loader';

const history = createBrowserHistory({
  basename: "",
});

const ROUTES = {
  USING_WEB_COMPONENTS_DEMO: "/using-web-components-demo",
  STENCIL_VS_PLAIN_WEB_COMPONENT_DEMO: "/stencil-vs-plain-web-component-demo",
  PASSING_NON_SCALAR_DATA: "/passing-non-scalar-data-demo",
  SYNTHETIC_EVENT_DEMO: "/synthetic-event-demo",
  DECLARATIVE_VS_IMPERATIVE_DEMO: "/declarative-vs-imperative-demo",
};

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={ROUTES.USING_WEB_COMPONENTS_DEMO}
          component={UsingWebComponentsDemo}
        />
        <Route
          exact
          path={ROUTES.STENCIL_VS_PLAIN_WEB_COMPONENT_DEMO}
          component={StencilVsPlainWebComponentDemo}
        />
        <Route
          exact
          path={ROUTES.PASSING_NON_SCALAR_DATA}
          component={PassingNonScalarDataDemo}
        />
        <Route
          exact
          path={ROUTES.SYNTHETIC_EVENT_DEMO}
          component={SyntheticEventDemo}
        />
        <Route
          exact
          path={ROUTES.DECLARATIVE_VS_IMPERATIVE_DEMO}
          component={DeclarativeVsImperativeDemo}
        />
        <Route>
          <Redirect to={ROUTES.SYNTHETIC_EVENT_DEMO} />
        </Route>
      </Switch>
      <br />
      <React.Fragment>
        <div className="links">
          <button onClick={() => history.push(ROUTES.USING_WEB_COMPONENTS_DEMO)}>
            Using Web Components Demo
          </button>
          <div className="divider">&nbsp;</div>
          <button onClick={() => history.push(ROUTES.STENCIL_VS_PLAIN_WEB_COMPONENT_DEMO)}>
            Stencil vs Plain Web Component Demo
          </button>
          <div className="divider">&nbsp;</div>
          <button onClick={() => history.push(ROUTES.PASSING_NON_SCALAR_DATA)}>
            Passing Non Scalar Data Demo
          </button>
          <div className="divider">&nbsp;</div>
          <button onClick={() => history.push(ROUTES.SYNTHETIC_EVENT_DEMO)}>
            Synthetic Event Demo
          </button>
          <div className="divider">&nbsp;</div>
          <button
            onClick={() => history.push(ROUTES.DECLARATIVE_VS_IMPERATIVE_DEMO)}
          >
            Declarative vs. Imperative Demo
          </button>
        </div>
      </React.Fragment>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

applyPolyfills().then(() => {
  defineCustomElements();
});
