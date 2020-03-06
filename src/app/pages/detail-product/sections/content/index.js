import React from "react";
import { Container } from "./styles";
import Preview from "./sections/preview";
import Description from "./sections/description";
import Delivery from "./sections/delivery";
import Share from "./sections/share";

const Content = () => {
  return (
    <React.Fragment>
      <Container.Content>
        <Preview />
        <Description />
      </Container.Content>
      <Container.Description>
        <Delivery />
        <Share />
      </Container.Description>
    </React.Fragment>
  );
};

export default Content;
