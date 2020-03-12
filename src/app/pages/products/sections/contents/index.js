import React from "react";
import { Container, ContainerCard } from "./styles";
import { H1 } from "app/components/font";
import { NavLink } from "react-router-dom";

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
          <NavLink to={"tshirt"}>
            <img src={Tshirt} alt="tshirt" />
          </NavLink>
          <H1>Tshirt</H1>
        </ContainerCard.Left>
        <ContainerCard.Right>
          <NavLink to={"shirt"}>
            <img src={Shirts} alt="shirts" />
          </NavLink>
          <H1>Shirts</H1>
        </ContainerCard.Right>
      </Container.Card>
      <Container.Card>
        <ContainerCard.Left>
          <NavLink to={"jacket"}>
            <img src={Jackets} alt="jackets" />
          </NavLink>
          <H1>Jakcets</H1>
        </ContainerCard.Left>
        <ContainerCard.Right>
          <NavLink to={"sweatshirt"}>
            <img src={Sweatshirts} alt="sweatshirts" />
          </NavLink>
          <H1>Sweatshirts</H1>
        </ContainerCard.Right>
      </Container.Card>
      <Container.Card>
        <ContainerCard.Left>
          <NavLink to={"shotpants"}>
            <img src={ShortPants} alt="short-pants" />
          </NavLink>
          <H1>Short Pants</H1>
        </ContainerCard.Left>
        <ContainerCard.Right>
          <NavLink to={"denim"}>
            <img src={Denim} alt="denim" />
          </NavLink>
          <H1>Long Pants</H1>
        </ContainerCard.Right>
      </Container.Card>
    </Container.Wrapper>
  );
};

export default Contents;
