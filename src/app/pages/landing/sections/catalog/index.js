import React from "react";
import { H1 } from "app/components/font";
import { Container, ContainerTop, ContainerBottom } from "./styles";

const Catalog = ({ dataCatalog }) => {
  return (
    <Container.Wrapper>
      {/* <H1> OUR PRODUCTS </H1> */}
      <Container.Top>
        <ContainerTop.Left>
          <img src={dataCatalog[0].img} alt={dataCatalog[0].name} />
          <H1>{dataCatalog[0].name}</H1>
        </ContainerTop.Left>
        <ContainerTop.Right>
          <img src={dataCatalog[1].img} alt={dataCatalog[1].name} />
          <H1>{dataCatalog[1].name}</H1>
        </ContainerTop.Right>
      </Container.Top>
      <Container.Bottom>
        <ContainerBottom.Left>
          <img src={dataCatalog[2].img} alt={dataCatalog[2].name} />
          <H1>{dataCatalog[2].name}</H1>
        </ContainerBottom.Left>
        <ContainerBottom.Right>
          <img src={dataCatalog[3].img} alt={dataCatalog[3].name} />
          <H1>{dataCatalog[3].name}</H1>
        </ContainerBottom.Right>
      </Container.Bottom>
    </Container.Wrapper>
  );
};

export default Catalog;
