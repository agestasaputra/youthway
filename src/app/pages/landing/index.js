import React from "react";
import { Container } from "./styles";
import Banner from "./sections/banner";
import NewArrivals from "./sections/new-arrivals";

const Landing = () => {
  return (
    <Container>
      <Banner />
      <NewArrivals />
    </Container>
  );
};

export default Landing;
