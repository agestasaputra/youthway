import React from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";

const CardNewArrival = props => {
  console.log("cek props on Card New Arrival:", props);
  return <Container>Card New Arrival</Container>;
};

CardNewArrival.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  gender: PropTypes.array,
  color: PropTypes.array,
  price: PropTypes.number
};

export default CardNewArrival;
