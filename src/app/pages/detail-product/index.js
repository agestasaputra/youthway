import React from "react";
import { Container } from "./styles";
import Content from "./sections/content";
import Recomendation from "./sections/recomendation";

const DetailProduct = ({ state, dispatch, location, history, match }) => {
  return (
    <Container>
      <Content state={state} dispatch={dispatch} location={location} />
      <Recomendation state={state} dispatch={dispatch} location={location} />
    </Container>
  );
};

export default DetailProduct;
