import React from "react";
import { Container, SocialMedia } from "./styles";
import { H4 } from "app/components/font";

const Share = () => {
  return (
    <Container>
      <H4 className="title">Share</H4>
      <SocialMedia>
        {/* <i className="fab fa-whatsapp-square" />
        <i className="fab fa-twitter-square" />
        <i className="fab fa-facebook-square" />
        <i className="fab fa-instagram-square" /> */}
        <i className="fab fa-whatsapp" />
        <i className="fab fa-twitter" />
        <i className="fab fa-facebook" />
        <i className="fab fa-instagram" />
      </SocialMedia>
    </Container>
  );
};

export default Share;
