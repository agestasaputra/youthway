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

const Routes = ({ state, dispatch, location, history, match }) => {
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
          component={() => (
            <ProductList
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/products/shortpants"
          component={() => (
            <ProductList
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/products/jacket"
          component={() => (
            <ProductList
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/products/sweatshirt"
          component={() => (
            <ProductList
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/products/shirt"
          component={() => (
            <ProductList
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/products/tshirt/:productName"
          component={() => (
            <DetailProduct
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/products/tshirt/"
          component={() => (
            <ProductList
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/products"
          component={() => (
            <Products
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/women-size-guide"
          component={() => (
            <WomenSizeGuide
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/men-size-guide"
          component={() => (
            <MenSizeGuide
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/faqs"
          component={() => (
            <Faqs
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/careers"
          component={() => (
            <Careers
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/location"
          component={() => (
            <Location
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/heritage"
          component={() => (
            <Heritage
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/shipping-and-delivery"
          component={() => (
            <ShippingAndDelivery
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/returns"
          component={() => (
            <Returns
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/"
          component={() => (
            <Landing
              state={state}
              dispatch={dispatch}
              location={location}
              history={history}
              match={match}
            />
          )}
        />
      </Switch>
      <Footer />
    </React.Suspense>
  );
};

export default withRouter(Routes);
