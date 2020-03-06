import React from "react";
import { Container } from "./styles";
import { H4, P3 } from "app/components/font";
import { Package } from "react-feather";

const Delivery = () => {
  return (
    <Container>
      <H4 className="title">Delivery</H4>
      <P3 className="desc">
        <Package className="delivery" color="black" size="20" />
        Free shipping on orders over US$250. <br />
        Standard Delivery: Orders are delivered by DHL within <br />
        4-6 business days, not inclusive of Public Holidays.
      </P3>
    </Container>
  );
};

export default Delivery;
