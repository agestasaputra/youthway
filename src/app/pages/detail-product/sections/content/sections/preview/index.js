import React from "react";
import { Container } from "./styles";
import Tshirt from "app/assets/product/tshirt.jpg";
import Lekbong from "app/assets/product/lekbong.jpg";
import Denim from "app/assets/product/denim.jpg";

const Preview = () => {
  return (
    <Container>
      <img src={Tshirt} alt="tshirt-catalog" />
      <img src={Lekbong} alt="lekbong-catalog" />
      <img src={Denim} alt="denim-catalog" />
    </Container>
  );
};

export default Preview;
