import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Landing from "app/pages/landing";
import NavbarSmall from "app/components/navbar-sm";
import NavbarLarge from "app/components/navbar-lg";
import Footer from "app/components/footer";
// import AuthenticatedRoute from "./AuthenticatedRoute";
// import UnauthenticatedRoute from "./UnauthenticatedRoute";

const Routes = () => {
  return (
    <React.Suspense fallback={null}>
      <NavbarSmall />
      <NavbarLarge />
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
      <Footer />
    </React.Suspense>
  );
};

export default withRouter(Routes);
