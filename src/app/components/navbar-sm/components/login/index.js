import React from "react";
import { Content, Body, Middle } from "./styles";
import { H5 } from "app/components/font";
import { NavLink } from "react-router-dom";
import Modal from "app/components/modal";
import YouthwayLogo from "app/assets/logo/youthway-logo.png";

const Login = ({ setLogin }) => {
  return (
    <Modal title="SIGN IN TO YOUR ACCOUNT" show={setLogin}>
      <Content.Wrapper>
        <Content.Header>
          <img src={YouthwayLogo} alt="icon-youthway" />
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
  );
};

export default Login;
