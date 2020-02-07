import React from "react";
import { Container } from "./styles";
import ProductsBanner from "app/assets/banner/product-banner.jpg";

const Banner = ({ img }) => {
  return (
    <Container>
      <img src={ProductsBanner} alt="products-banner" />
    </Container>
  );
};

export default Banner;
