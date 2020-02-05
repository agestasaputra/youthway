import React from "react";
import { Container, Box } from "./styles";
import { H1, P3 } from "app/components/font";

const ShippingAndDelivery = () => {
  return (
    <Container>
      <Box>
        <H1 className="title">Shipping And Delivery</H1>
        <P3 className="desc">Free shipping on all orders over £90/€100</P3>

        <P3 className="uppercase">SHIPPING OPTIONS</P3>
        <ul>
          <li>
            <P3 className="desc">
              Standard = 3 to 5 business days (Cost = £2.95 / €2.95)
            </P3>
          </li>
          <li>
            <P3 className="desc">
              Express = 1 to 2 business days (Cost = £7.95 / €7.95)
            </P3>
          </li>
        </ul>

        <P3 className="uppercase">SHIPPING COUNTRIES</P3>
        <ul>
          <li>
            <P3 className="desc">UK</P3>
          </li>
          <li>
            <P3 className="desc">Italy</P3>
          </li>
          <li>
            <P3 className="desc">Belgium</P3>
          </li>
          <li>
            <P3 className="desc">Germany</P3>
          </li>
          <li>
            <P3 className="desc">Denmark</P3>
          </li>
          <li>
            <P3 className="desc">Sweden</P3>
          </li>
          <li>
            <P3 className="desc">France</P3>
          </li>
          <li>
            <P3 className="desc">Ireland</P3>
          </li>
          <li>
            <P3 className="desc">Spain</P3>
          </li>
          <li>
            <P3 className="desc">Netherlands</P3>
          </li>
        </ul>

        <P3 className="uppercase">EXCLUDE AREAS</P3>
        <ul>
          <li>
            <P3 className="desc">
              Italy: Campione d'Italia, Livignio, Luganer Sea, San Marino,
              Vatican
            </P3>
          </li>
          <li>
            <P3 className="desc">
              Spain: Andorra, Ceuta / Melilla, Gibraltar, Canary Islands
            </P3>
          </li>
          <li>
            <P3 className="desc">Great Britain: Jersey, Guernsey</P3>
          </li>
          <li>
            <P3 className="desc">Germany: Buesingen</P3>
          </li>
        </ul>

        <P3 className="uppercase">ORDER TIMING</P3>
        <ul>
          <li>
            <P3 className="desc">
              All orders received before 4pm are processed in the same day
            </P3>
          </li>
          <li>
            <P3 className="desc">
              All orders received after 4pm are processed in the following day
            </P3>
          </li>
        </ul>

        <P3 className="uppercase">ORDER TRACKING</P3>
        <P3 className="desc">
          You have the option to track your shipment. Once the order is
          dispatched, you will receive an order shipment confirmation email with
          a tracking number.
        </P3>
      </Box>
    </Container>
  );
};

export default ShippingAndDelivery;
