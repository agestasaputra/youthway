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

const Routes = ({ state, dispatch }) => {
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
        <Route
          path="/products/longpants"
          component={() => <ProductList state={state} dispatch={dispatch} />}
        />
        <Route
          path="/products/shortpants"
          component={() => <ProductList state={state} dispatch={dispatch} />}
        />
        <Route
          path="/products/jackets"
          component={() => <ProductList state={state} dispatch={dispatch} />}
        />
        <Route
          path="/products/sweatshirts"
          component={() => <ProductList state={state} dispatch={dispatch} />}
        />
        <Route
          path="/products/shirts"
          component={() => <ProductList state={state} dispatch={dispatch} />}
        />
        <Route
          path="/products/tshirts"
          component={() => <ProductList state={state} dispatch={dispatch} />}
        />
        <Route
          path="/products"
          component={() => <Products state={state} dispatch={dispatch} />}
        />
        <Route
          path="/women-size-guide"
          component={() => <WomenSizeGuide state={state} dispatch={dispatch} />}
        />
        <Route
          path="/men-size-guide"
          component={() => <MenSizeGuide state={state} dispatch={dispatch} />}
        />
        <Route
          path="/faqs"
          component={() => <Faqs state={state} dispatch={dispatch} />}
        />
        <Route
          path="/careers"
          component={() => <Careers state={state} dispatch={dispatch} />}
        />
        <Route
          path="/location"
          component={() => <Location state={state} dispatch={dispatch} />}
        />
        <Route
          path="/heritage"
          component={() => <Heritage state={state} dispatch={dispatch} />}
        />
        <Route
          path="/shipping-and-delivery"
          component={() => (
            <ShippingAndDelivery state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/returns"
          component={() => <Returns state={state} dispatch={dispatch} />}
        />
        <Route
          path="/"
          component={() => <Landing state={state} dispatch={dispatch} />}
        />
      </Switch>
      <Footer />
    </React.Suspense>
  );
};

export default withRouter(Routes);
