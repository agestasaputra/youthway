import React from "react";
import { Container } from "./styles";

const Button = props => {
  console.log("cek props:", props);
  return (
    <Container
      width={props.width && props.width}
      className={props.className && props.className}
      onClick={() => props.funcPage && props.funcPage(props.children)}
    >
      {props.children}
    </Container>
  );
};

export default Button;
