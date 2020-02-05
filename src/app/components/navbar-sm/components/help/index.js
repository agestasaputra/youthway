import React from "react";
import { Container } from "./styles";
import { H5 } from "app/components/font";
import { NavLink } from "react-router-dom";

const Help = ({ setHelp }) => {
  return (
    <Container onMouseLeave={() => setHelp(false)}>
      <ul>
        <li>
          <NavLink to={`/shipping-and-delivery`}>
            <H5>Shipping & Delivery</H5>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/returns`}>
            <H5>Returns</H5>
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default Help;
