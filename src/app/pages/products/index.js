import React from "react";
import { H1 } from "app/components/font";
import { Container, ContainerTop, ContainerBottom } from "./styles";
// import { NavLink } from "react-router-dom";

import Tshirt from "app/assets/product/tshirt.jpg";
import Lekbong from "app/assets/product/lekbong.jpg";
import ShortPants from "app/assets/product/short-pants.jpg";
import Denim from "app/assets/product/denim.jpg";

const Products = () => {
  return (
    <Container.Wrapper>
      <H1> OUR PRODUCTS </H1>
      <Container.Top>
        <ContainerTop.Left>
          <img src={Tshirt} alt="tshirt" />
          <H1>Tshirt</H1>
        </ContainerTop.Left>
        <ContainerTop.Right>
          <img src={Lekbong} alt="lekbong" />
          <H1>Lekbong</H1>
        </ContainerTop.Right>
      </Container.Top>
      <Container.Bottom>
        <ContainerBottom.Left>
          <img src={ShortPants} alt="short-pants" />
          <H1>Short Pants</H1>
        </ContainerBottom.Left>
        <ContainerBottom.Right>
          <img src={Denim} alt="denim-pants" />
          <H1>Denim</H1>
        </ContainerBottom.Right>
      </Container.Bottom>
    </Container.Wrapper>
  );
};

export default Products;
