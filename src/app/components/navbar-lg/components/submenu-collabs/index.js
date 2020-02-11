import React from "react";
import { Container } from "./styles";
// import { H5 } from "app/components/font";
// import { NavLink } from "react-router-dom";

const SubmenuCollabs = ({
  refSubmenuCollabs,
  mouseOverHandler,
  mouseOutHandler
}) => {
  return (
    <Container.Wrapper
      ref={refSubmenuCollabs}
      onMouseOver={() => mouseOverHandler("collabs")}
      onMouseOut={() => mouseOutHandler("collabs")}
    >
      <Container.Left>Collabs - Left</Container.Left>
      <Container.Middle>Collabs - Middle</Container.Middle>
      <Container.Right>Collabs - Right</Container.Right>
    </Container.Wrapper>
  );
};

export default SubmenuCollabs;
