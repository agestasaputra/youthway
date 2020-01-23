import React from "react";
import { H1Styles, H2Styles, H3Styles, H4Styles, H5Styles } from "./styles";

const H1 = props => {
  return (
    <H1Styles
      onClick={props.onClick && props.onClick}
      className={props.className && props.className}
    >
      {props.children}
    </H1Styles>
  );
};

const H2 = props => {
  return (
    <H2Styles className={props.className && props.className}>
      {props.children}
    </H2Styles>
  );
};

const H3 = props => {
  return (
    <H3Styles className={props.className && props.className}>
      {props.children}
    </H3Styles>
  );
};

const H4 = props => {
  return (
    <H4Styles className={props.className && props.className}>
      {props.children}
    </H4Styles>
  );
};

const H5 = props => {
  return (
    <H5Styles className={props.className && props.className}>
      {props.children}
    </H5Styles>
  );
};

export { H1, H2, H3, H4, H5 };
