import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

    h1 {
      margin: 3% 0% 5% 0%;
      text-align: center;
    }

    a {
      padding: 1% 2%;
      margin: 3% auto 8% auto;
      background: ${color.brand.primaryBlack};
      color: ${color.brand.primaryWhite};
      text-decoration: none;
    }
  `,
  Card: styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* height: 50vw; */
  `
};

export const ContainerCard = {
  Left: styled.div`
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      transition: 0.5s;
    }

    h1 {
      margin: 0px;
      text-transform: uppercase;
      position: relative;
      top: -55%;
      color: ${color.brand.primaryWhite};
      opacity: 0;
      transition: 0.5s;
    }

    &:hover {
      img {
        filter: brightness(40%);
      }

      h1 {
        transition: 0.5s;
        opacity: 1;
      }
    }
  `,
  Right: styled.div`
    flex: 1;
    /* height: 100%; */
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      transition: 0.5s;
    }

    h1 {
      margin: 0px;
      text-transform: uppercase;
      position: relative;
      top: -55%;
      color: ${color.brand.primaryWhite};
      opacity: 0;
      transition: 0.5s;
    }

    &:hover {
      img {
        filter: brightness(40%);
      }

      h1 {
        transition: 0.5s;
        opacity: 1;
      }
    }
  `
};
