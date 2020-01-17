import React from "react";
import { Container } from "./styles";
import LandingBanner from "app/assets/banner/landing-banner.jpg";

const Banner = () => {
  return (
    <Container>
      <img src={LandingBanner} alt="landing-banner" />
    </Container>
  );
};

export default Banner;
