import React from "react";
import ReactDOM from "react-dom";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import SyntheticEventDemo from "./synthetic-event-demo/SyntheticEventDemo";
import DeclarativeVsImperativeDemo from "./declarative-vs-imperative-demo/DeclarativeVsImperativeDemo";

const history = createBrowserHistory({
  basename: "",
});

const ROUTES = {
  SYNTHETIC_EVENT_DEMO: '/synthetic-event-demo',
  DECLARATIVE_VS_IMPERATIVE_DEMO: '/declarative-vs-imperative-demo',
  CSS_LEAK_DEMO: '/css-leak-demo',
}

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
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
          <a
            href={ROUTES.SYNTHETIC_EVENT_DEMO}
            onClick={() => history.push(ROUTES.SYNTHETIC_EVENT_DEMO)}
          >
            Synthetic Event Demo
          </a>
          <div className="divider">&nbsp;</div>
          <a
            href={ROUTES.DECLARATIVE_VS_IMPERATIVE_DEMO}
            onClick={() => history.push(ROUTES.DECLARATIVE_VS_IMPERATIVE_DEMO)}
          >
            Declarative vs. Imperative Demo
          </a>
          <div className="divider">&nbsp;</div>
          <a
            href={ROUTES.CSS_LEAK_DEMO}
            onClick={() => history.push(ROUTES.CSS_LEAK_DEMO)}
          >
            CSS Leak Demo
          </a>
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
