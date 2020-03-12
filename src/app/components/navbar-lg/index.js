import React from "react";
import { Container, NavbarTop, NavbarMenu, NavbarMenuRight } from "./styles2";
import { H2 } from "app/components/font";
import { Heart, ShoppingBag } from "react-feather";
import YouthwayLogo from "app/assets/logo/youthway-logo.png";
import { NavLink } from "react-router-dom";
import SubmenuMen from "./components/submenu-men";
import SubmenuWomen from "./components/submenu-women";
import SubmenuCollabs from "./components/submenu-collabs";

const Navbar = ({ state, dispatch }) => {
  const refSubmenuMen = React.useRef();
  const refSubmenuWomen = React.useRef();
  const refSubmenuCollabs = React.useRef();

  const mouseOverHandler = type => {
    type === "men"
      ? refSubmenuMen.current.classList.add("show")
      : type === "women"
      ? refSubmenuWomen.current.classList.add("show")
      : type === "collabs" && refSubmenuCollabs.current.classList.add("show");
  };

  const mouseOutHandler = type => {
    type === "men"
      ? refSubmenuMen.current.classList.remove("show")
      : type === "women"
      ? refSubmenuWomen.current.classList.remove("show")
      : type === "collabs" &&
        refSubmenuCollabs.current.classList.remove("show");
  };

  return (
    <Container.Wrapper>
      <Container.Top>
        <NavbarTop.Left>
          <NavLink to={"/"}>
            <img src={YouthwayLogo} alt="icon-youthway" />
          </NavLink>
        </NavbarTop.Left>
        <NavbarTop.Middle>
          <NavbarMenu.Wrapper>
            <NavbarMenu.Left
              onMouseOver={() => mouseOverHandler("men")}
              onMouseOut={() => mouseOutHandler("men")}
            >
              <H2>MEN</H2>
            </NavbarMenu.Left>
            <NavbarMenu.Middle
              onMouseOver={() => mouseOverHandler("women")}
              onMouseOut={() => mouseOutHandler("women")}
            >
              <H2>WOMEN</H2>
            </NavbarMenu.Middle>
            <NavbarMenu.Right
              onMouseOver={() => mouseOverHandler("collabs")}
              onMouseOut={() => mouseOutHandler("collabs")}
            >
              <H2>COLLABS</H2>
            </NavbarMenu.Right>
          </NavbarMenu.Wrapper>
        </NavbarTop.Middle>
        <NavbarTop.Right>
          <NavbarMenuRight.Left>
            <ShoppingBag color="black" size="24" />
          </NavbarMenuRight.Left>
          <NavbarMenuRight.Middle>
            {state.dataNavbarLarge.dataCartCounter}
          </NavbarMenuRight.Middle>
          <NavbarMenuRight.Right>
            <NavLink to={"/wishlist"}>
              <Heart color="black" size="24" />
            </NavLink>
          </NavbarMenuRight.Right>
        </NavbarTop.Right>
      </Container.Top>
      <Container.Bottom>
        <SubmenuMen
          refSubmenuMen={refSubmenuMen}
          mouseOverHandler={mouseOverHandler}
          mouseOutHandler={mouseOutHandler}
        />
        <SubmenuWomen
          refSubmenuWomen={refSubmenuWomen}
          mouseOverHandler={mouseOverHandler}
          mouseOutHandler={mouseOutHandler}
        />
        <SubmenuCollabs
          refSubmenuCollabs={refSubmenuCollabs}
          mouseOverHandler={mouseOverHandler}
          mouseOutHandler={mouseOutHandler}
        />
      </Container.Bottom>
    </Container.Wrapper>
  );
};

export default Navbar;
