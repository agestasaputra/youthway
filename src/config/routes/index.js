import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Landing from "app/pages/landing";
// import AuthenticatedRoute from "./AuthenticatedRoute";
// import UnauthenticatedRoute from "./UnauthenticatedRoute";

const Routes = () => {
  return (
    <React.Suspense fallback={null}>
      <Switch>
        {/* <UnauthenticatedRoute
          exact
          path="/"
          component={Landing}
          props={childProps}
        /> */}
        {/* <AuthenticatedRoute path="/home" component={Home} props={childProps} /> */}
        <Route path="/" component={Landing} />
      </Switch>
    </React.Suspense>
  );
};

export default withRouter(Routes);
