import React from "react";
import { H1Styles } from "./styles";

const H1 = props => {
  console.log("cek props on H1:", props);
  return <H1Styles>{props.children}</H1Styles>;
};

export { H1 };
