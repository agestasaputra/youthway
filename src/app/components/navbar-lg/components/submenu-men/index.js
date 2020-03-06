import React from "react";
import { Container, ContainerLeft, ContainerMiddle, Catalog } from "./styles";
import { H4, H6 } from "app/components/font";
import { NavLink } from "react-router-dom";
import CatalogWinter from "app/assets/catalog/winter-men.jpg";
import DiscUpTo50 from "app/assets/promotion/promo-up-to-50.jpg";

const SubmenuMen = ({ refSubmenuMen, mouseOverHandler, mouseOutHandler }) => {
  return (
    <Container.Wrapper
      ref={refSubmenuMen}
      onMouseOver={() => mouseOverHandler("men")}
      onMouseOut={() => mouseOutHandler("men")}
    >
      <Container.Left>
        <ContainerLeft.Left>
          <img src={DiscUpTo50} alt="promo-up-to-50" />
          <NavLink to="disc">
            <H6>Disc Up To 50%</H6>
          </NavLink>
        </ContainerLeft.Left>
        <ContainerLeft.Right>
          <H4>Featured</H4>
          <NavLink to="new-arrivals">
            <H6>New Arrivals</H6>
          </NavLink>
          <NavLink to="essentials">
            <H6>Essentials</H6>
          </NavLink>
          <NavLink to="discounts">
            <H6>Discounts</H6>
          </NavLink>
        </ContainerLeft.Right>
      </Container.Left>
      <Container.Middle>
        <ContainerMiddle.Left>
          <H4>Clothes</H4>
          <NavLink to="/products/tshirt">
            <H6>Tshirts</H6>
          </NavLink>
          <NavLink to="/products/shirt">
            <H6>Shirts/Flannel</H6>
          </NavLink>
          <NavLink to="/products/sweatshirt">
            <H6>Sweatshirts</H6>
          </NavLink>
          <NavLink to="/products/jacket">
            <H6>Jackets</H6>
          </NavLink>
        </ContainerMiddle.Left>
        <ContainerMiddle.Right>
          <H4>Pants</H4>
          <NavLink to="/products/short">
            <H6>Short Pants</H6>
          </NavLink>
          <NavLink to="/products/denim">
            <H6>Denims</H6>
          </NavLink>
          <NavLink to="/products/chino">
            <H6>Chinos</H6>
          </NavLink>
          <NavLink to="/products/jogger">
            <H6>Joggerpants</H6>
          </NavLink>
        </ContainerMiddle.Right>
      </Container.Middle>
      <Container.Right>
        <Catalog>
          <img src={CatalogWinter} alt="catalog-winter-season" />
          <NavLink to="winter-season">
            <H6>Catalog Winter Season</H6>
          </NavLink>
        </Catalog>
      </Container.Right>
    </Container.Wrapper>
  );
};

export default SubmenuMen;
