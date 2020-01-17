import React from "react";
import { Container } from "./styles";
import { H1 } from "app/components/font";
import CardNewArrival from "app/components/card/new-arrival";
import Tshirt from "app/assets/product/tshirt.jpg";

const NewArrivals = () => {
  return (
    <Container>
      <H1>New Arrivals</H1>
      <CardNewArrival
        img={Tshirt}
        title="Tshirt 1"
        gender={["men", "woman"]}
        color={["black", "white", "red"]}
        price={85000}
      />
    </Container>
  );
};

export default NewArrivals;
