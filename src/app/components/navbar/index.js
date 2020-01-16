import React from "react";
import { Container } from "./styles";
import { H1 } from "app/components/font";

const Navbar = () => {
  return (
    <Container.Wrapper>
      <Container.Left>
        <H1>YOUTHWAY</H1>
      </Container.Left>
      <Container.Right>Navbar Right</Container.Right>
    </Container.Wrapper>
  );
};

export default Navbar;
