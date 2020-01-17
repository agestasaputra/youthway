import React from "react";
import { H1Styles, H2Styles, H3Styles, H4Styles, H5Styles } from "./styles";

const H1 = props => {
  console.log("cek props on H1:", props);
  return <H1Styles>{props.children}</H1Styles>;
};

const H2 = props => {
  return <H2Styles>{props.children}</H2Styles>;
};

const H3 = props => {
  return <H3Styles>{props.children}</H3Styles>;
};

const H4 = props => {
  return <H4Styles>{props.children}</H4Styles>;
};

const H5 = props => {
  return <H5Styles>{props.children}</H5Styles>;
};

export { H1, H2, H3, H4, H5 };
