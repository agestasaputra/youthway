import React from "react";
import { Container, NavbarMenu, NavbarMenuRight } from "./styles";
import { H2 } from "app/components/font";
import { Heart, ShoppingBag } from "react-feather";
import YTHWY from "app/assets/logo/YTHWY.png";
import { NavLink } from "react-router-dom";
import Men from "./components/men";
import Women from "./components/women";
import Collabs from "./components/collabs";

const Navbar = () => {
  const [men, setMen] = React.useState(false);
  const [women, setWomen] = React.useState(false);
  const [collabs, setCollabs] = React.useState(false);

  return (
    <Container.Wrapper>
      <Container.Left>
        <img src={YTHWY} alt="icon-youthway" />
      </Container.Left>
      <Container.Middle>
        <NavbarMenu.Wrapper>
          <NavbarMenu.Left onMouseOver={() => setMen(true)}>
            <H2>MEN</H2>
          </NavbarMenu.Left>
          <NavbarMenu.Middle>
            <H2>WOMEN</H2>
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
          <NavLink to={"/wishlist"}>
            <Heart color="black" size="24" />
          </NavLink>
        </NavbarMenuRight.Right>
      </Container.Right>
      {men && <Men setMen={setMen} />}
      {women && <Women setWomen={setWomen} />}
      {collabs && <Collabs setCollabs={setCollabs} />}
    </Container.Wrapper>
  );
};

export default Navbar;
