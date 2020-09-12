import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./static/index.css";
import IndexPage from "./view/index";
import Page404 from "./view/404";
const indexType = ["all", "good", "share", "ask"];

function App() {
  return (
    <Fragment>
      <Switch>
        <Route
          path={["/", "/:type", "/:type/:page"]}
          exact
          render={(routeProps) => {
            const { params } = routeProps.match;
            const { type = "all", page = 1 } = params;
            console.log(params);
            if (
              indexType.includes(type) &&
              page + "" === parseInt(page) + "" &&
              page > 0
            ) {
              return <IndexPage {...routeProps} />;
            }
            // return <Page404 />;
            return <Redirect to="/404" />;
          }}
        ></Route>
        <Route
          // path="*"
          component={(routeProps) => {
            return <Page404 {...routeProps} />;
          }}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
