import React from "react";
import { Container, ContainerLeft, ContainerRight } from "./styles";
import { NavLink } from "react-router-dom";
import { H5 } from "app/components/font";
import Help from "./components/help";
import Login from "./components/login";

const Navbar = () => {
  const [login, setLogin] = React.useState(false);
  const [help, setHelp] = React.useState(false);

  const loginHandler = () => {
    setLogin(!login);
    return;
  };

  return (
    <Container.Wrapper>
      <Container.Left>
        <ContainerLeft.Left>
          <NavLink to={"/"}>
            <H5>YOUTHWAY</H5>
          </NavLink>
        </ContainerLeft.Left>
        <ContainerLeft.Right />
      </Container.Left>
      <Container.Right>
        <ContainerRight.Left />
        <ContainerRight.Middle
          onClick={loginHandler}
          onMouseOver={() => setHelp(false)}
        >
          <H5>SIGN IN</H5>
        </ContainerRight.Middle>
        <ContainerRight.Right onMouseOver={() => setHelp(true)}>
          <H5>HELP</H5>
        </ContainerRight.Right>
      </Container.Right>
      {login && <Login setLogin={setLogin} />}
      {help && <Help setHelp={setHelp} />}
    </Container.Wrapper>
  );
};

export default Navbar;
