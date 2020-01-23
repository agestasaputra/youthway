import React from "react";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Content,
  Body,
  Middle
} from "./styles";
import { /* H3, */ H5 } from "app/components/font";
import { NavLink } from "react-router-dom";
import Modal from "app/components/modal";
import YTHWY from "app/assets/logo/YTHWY.png";

const Navbar = () => {
  const [login, setLogin] = React.useState(false);
  // const [help, setHelp] = React.useState(false);

  const loginHandler = () => {
    setLogin(true);
    return;
  };

  // const helpHandler = () => {
  //   setHelp(true);
  //   return;
  // };

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
        <ContainerRight.Middle>
          <div onClick={loginHandler}>
            <H5>SIGN IN</H5>
          </div>
        </ContainerRight.Middle>
        <ContainerRight.Right>
          {/* <div onClick={helpHandler}> */}
          <H5>HELP</H5>
          {/* </div> */}
        </ContainerRight.Right>
      </Container.Right>
      {login && (
        <Modal title="SIGN IN TO YOUR ACCOUNT" show={setLogin}>
          <Content.Wrapper>
            <Content.Header>
              <img src={YTHWY} alt="icon-youthway" />
            </Content.Header>
            <Content.Body>
              <Body.Top>
                <input type="email" name="email" placeholder="Email address" />
                <input type="password" name="password" placeholder="Password" />
              </Body.Top>
              <Body.Middle>
                <Middle.Left>
                  <H5>Keep me logged in</H5>
                </Middle.Left>
                <Middle.Right>
                  <NavLink to={`forgot-password`}>
                    <H5>Forgot password?</H5>
                  </NavLink>
                </Middle.Right>
              </Body.Middle>
              <Body.Bottom>
                <p className="top">
                  By logging in, you agree to Nike's&nbsp;
                  <NavLink to={`privacy-policy`}>Privacy Policy</NavLink>&nbsp;
                  and&nbsp;
                  <NavLink to={`terms-of-use`}>Terms of Use</NavLink>.
                </p>
                <button>SIGN IN</button>
                <p className="bottom">
                  Not a member?&nbsp;
                  <NavLink to={`register`}>Join now</NavLink>.
                </p>
              </Body.Bottom>
            </Content.Body>
          </Content.Wrapper>
        </Modal>
      )}
    </Container.Wrapper>
  );
};

export default Navbar;
