import React from "react";
import { Container, ContainerCard } from "./styles";
import { H1 } from "app/components/font";

import Tshirt from "app/assets/product/tshirt.jpg";
import Shirts from "app/assets/product/shirts.jpg";
import ShortPants from "app/assets/product/short-pants.jpg";
import Denim from "app/assets/product/denim.jpg";
import Jackets from "app/assets/product/jackets.jpg";
import Sweatshirts from "app/assets/product/sweatshirts.jpg";

const Contents = () => {
  return (
    <Container.Wrapper>
      <H1> OUR PRODUCTS </H1>
      <Container.Card>
        <ContainerCard.Left>
          <img src={Tshirt} alt="tshirt" />
          <H1>Tshirt</H1>
        </ContainerCard.Left>
        <ContainerCard.Right>
          <img src={Shirts} alt="shirts" />
          <H1>Shirts</H1>
        </ContainerCard.Right>
      </Container.Card>
      <Container.Card>
        <ContainerCard.Left>
          <img src={Jackets} alt="jackets" />
          <H1>Jakcets</H1>
        </ContainerCard.Left>
        <ContainerCard.Right>
          <img src={Sweatshirts} alt="sweatshirts" />
          <H1>Sweatshirts</H1>
        </ContainerCard.Right>
      </Container.Card>
      <Container.Card>
        <ContainerCard.Left>
          <img src={ShortPants} alt="short-pants" />
          <H1>Short Pants</H1>
        </ContainerCard.Left>
        <ContainerCard.Right>
          <img src={Denim} alt="denim-pants" />
          <H1>Long Pants</H1>
        </ContainerCard.Right>
      </Container.Card>
    </Container.Wrapper>
  );
};

export default Contents;
