import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NavbarSmall from "app/components/navbar-sm";
import NavbarLarge from "app/components/navbar-lg";
import Footer from "app/components/footer";
import Landing from "app/pages/landing";
import Returns from "app/pages/returns";
import Heritage from "app/pages/heritage";
import Career from "app/pages/career";
import Location from "app/pages/location";
import Faq from "app/pages/faq";
import MenSizeGuide from "app/pages/men-size-guide";
import WomenSizeGuide from "app/pages/women-size-guide";
import ShippingAndDelivery from "app/pages/shipping-and-delivery";
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
        <Route path="/women-size-guide" component={WomenSizeGuide} />
        <Route path="/men-size-guide" component={MenSizeGuide} />
        <Route path="/faq" component={Faq} />
        <Route path="/career" component={Career} />
        <Route path="/location" component={Location} />
        <Route path="/heritage" component={Heritage} />
        <Route path="/shipping-and-delivery" component={ShippingAndDelivery} />
        <Route path="/returns" component={Returns} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </React.Suspense>
  );
};

export default withRouter(Routes);
