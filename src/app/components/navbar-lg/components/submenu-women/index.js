import React from "react";
import { Container } from "./styles";
// import { H5 } from "app/components/font";
// import { NavLink } from "react-router-dom";

const SubmenuWomen = ({
  refSubmenuWomen,
  mouseOverHandler,
  mouseOutHandler
}) => {
  return (
    <Container.Wrapper
      ref={refSubmenuWomen}
      onMouseOver={() => mouseOverHandler("women")}
      onMouseOut={() => mouseOutHandler("women")}
    >
      <Container.Left>Women - Left</Container.Left>
      <Container.Middle>Women - Middle</Container.Middle>
      <Container.Right>Women - Right</Container.Right>
    </Container.Wrapper>
  );
};

export default SubmenuWomen;
