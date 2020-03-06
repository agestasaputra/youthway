import React from "react";
import { Container } from "./styles";

const Size = ({ size, className }) => {
  return <Container className={className && className}>{size}</Container>;
};

export default Size;
