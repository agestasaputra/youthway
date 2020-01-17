import React from "react";
import { Container, NavbarMenu, NavbarMenuRight } from "./styles";
import { H2 } from "app/components/font";
import { Heart, ShoppingBag } from "react-feather";
import YTHWY from "app/assets/logo/YTHWY.png";

const Navbar = () => {
  return (
    <Container.Wrapper>
      <Container.Left>
        <img src={YTHWY} alt="icon-youthway" />
      </Container.Left>
      <Container.Middle>
        <NavbarMenu.Wrapper>
          <NavbarMenu.Left>
            <H2>MEN</H2>
          </NavbarMenu.Left>
          <NavbarMenu.Middle>
            <H2>WOMAN</H2>
          </NavbarMenu.Middle>
          <NavbarMenu.Right>
            <H2>COLLABS</H2>
          </NavbarMenu.Right>
        </NavbarMenu.Wrapper>
      </Container.Middle>
      <Container.Right>
        <NavbarMenuRight.Left>
          <ShoppingBag color="black" size="24" />
        </NavbarMenuRight.Left>
        <NavbarMenuRight.Middle>0</NavbarMenuRight.Middle>
        <NavbarMenuRight.Right>
          <Heart color="black" size="24" />
        </NavbarMenuRight.Right>
      </Container.Right>
    </Container.Wrapper>
  );
};

export default Navbar;
