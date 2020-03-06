import React from "react";
import { Container } from "./styles";
import Banner from "./sections/banner";
import NewArrival from "./sections/new-arrival";
import Catalog from "./sections/catalog";
import Tagline from "./sections/tagline";

const Landing = ({ state, dispatch, location }) => {
  return (
    <Container>
      <Banner
        img={
          state.dataLandingPage.dataBanner && state.dataLandingPage.dataBanner
        }
      />
      <NewArrival
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <Tagline img={state.dataLandingPage.dataTagline} />
      <Catalog dataCatalog={state.dataLandingPage.dataCatalog} />
    </Container>
  );
};

export default Landing;
