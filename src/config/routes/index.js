import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NavbarSmall from "app/components/navbar-sm";
import NavbarLarge from "app/components/navbar-lg";
import Footer from "app/components/footer";
import Landing from "app/pages/landing";
import Returns from "app/pages/returns";
import Heritage from "app/pages/heritage";
import Careers from "app/pages/careers";
import Location from "app/pages/location";
import Faqs from "app/pages/faqs";
import MenSizeGuide from "app/pages/men-size-guide";
import WomenSizeGuide from "app/pages/women-size-guide";
import ShippingAndDelivery from "app/pages/shipping-and-delivery";
import Products from "app/pages/products";
import ProductList from "app/pages/product-list";
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
        <Route path="/products/longpants" component={ProductList} />
        <Route path="/products/shortpants" component={ProductList} />
        <Route path="/products/jackets" component={ProductList} />
        <Route path="/products/sweatshirts" component={ProductList} />
        <Route path="/products/shirts" component={ProductList} />
        <Route path="/products/tshirts" component={ProductList} />
        <Route path="/products" component={Products} />
        <Route path="/women-size-guide" component={WomenSizeGuide} />
        <Route path="/men-size-guide" component={MenSizeGuide} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/careers" component={Careers} />
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
