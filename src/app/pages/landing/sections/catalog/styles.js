import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: column nowrap;

    h1 {
      margin-bottom: 5%;
      text-align: center;
    }
  `,
  Top: styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* height: 50vw; */
  `,
  Bottom: styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* height: 50vw; */
  `
};

export const ContainerTop = {
  Left: styled.div`
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

export const ContainerBottom = {
  Left: styled.div`
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
