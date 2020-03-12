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
import DetailProduct from "app/pages/detail-product";
// import AuthenticatedRoute from "./AuthenticatedRoute";
// import UnauthenticatedRoute from "./UnauthenticatedRoute";

const Routes = ({ state, dispatch }) => {
  return (
    <React.Suspense fallback={null}>
      <NavbarSmall state={state} dispatch={dispatch} />
      <NavbarLarge state={state} dispatch={dispatch} />
      <Switch>
        {/* <UnauthenticatedRoute
          exact
          path="/"
          component={Landing}
          props={childProps}
        /> */}
        {/* <AuthenticatedRoute path="/home" component={Home} props={childProps} /> */}
        <Route
          path="/products/longpants/:productCode"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/longpants"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/shortpants/:productCode"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/shortpants"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/jacket/:productCode"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/jacket"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/sweatshirt/:productCode"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/sweatshirt"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/shirt/:productCode"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/shirt"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/tshirt/:productCode"
          component={props => (
            <DetailProduct {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/tshirt/"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products"
          component={props => (
            <Products {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/women-size-guide"
          component={props => (
            <WomenSizeGuide {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/men-size-guide"
          component={props => (
            <MenSizeGuide {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/faqs"
          component={props => (
            <Faqs {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/careers"
          component={props => (
            <Careers {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/location"
          component={props => (
            <Location {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/heritage"
          component={props => (
            <Heritage {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/shipping-and-delivery"
          component={props => (
            <ShippingAndDelivery {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/returns"
          component={props => (
            <Returns {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/"
          component={props => (
            <Landing {...props} state={state} dispatch={dispatch} />
          )}
        />
      </Switch>
      <Footer />
    </React.Suspense>
  );
};

export default withRouter(Routes);
