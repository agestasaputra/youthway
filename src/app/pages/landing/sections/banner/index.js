import React from "react";
import { Container } from "./styles";

const Banner = ({ img }) => {
  return (
    <Container>
      <img src={img} alt="landing-banner" />
    </Container>
  );
};

export default Banner;
