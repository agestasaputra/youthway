import React from "react";
import { Container } from "./styles";

import Price from "./sections/price";
import Colors from "./sections/colors";
import Type from "./sections/type";
import Catalog from "./sections/catalog";
import Size from "./sections/size";

const Filters = () => {
  return (
    <Container>
      <Price />
      <Colors />
      <Type />
      <Catalog />
      <Size />
    </Container>
  );
};

export default Filters;
