import React from "react";
import { Container } from "./styles";

const Button = props => {
  return (
    <Container
      className={props.className && props.className}
      onClick={() => props.funcPage && props.funcPage(props.children)}
    >
      {props.children}
    </Container>
  );
};

export default Button;
