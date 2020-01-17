import React from "react";
import { Container, ContainerLeft, ContainerRight } from "./styles";
import { H5 } from "app/components/font";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container.Wrapper>
      <Container.Left>
        <ContainerLeft.Left>
          <NavLink to={"/"}>
            <H5>YOUTHWAY</H5>
          </NavLink>
        </ContainerLeft.Left>
        <ContainerLeft.Right />
      </Container.Left>
      <Container.Right>
        <ContainerRight.Left />
        <ContainerRight.Middle>
          <NavLink to={"/"}>
            <H5>SIGN IN</H5>
          </NavLink>
        </ContainerRight.Middle>
        <ContainerRight.Right>
          <NavLink to={"/"}>
            <H5>HELP</H5>
          </NavLink>
        </ContainerRight.Right>
      </Container.Right>
    </Container.Wrapper>
  );
};

export default Navbar;
