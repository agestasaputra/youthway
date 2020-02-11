import styled from "styled-components";
import color from "config/guidlines/color";
// import { L_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = {
  Wrapper: styled.div`
    padding: 0% 1%;
    background: ${color.brand.primaryWhite};
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    left: 0px;
    top: 30px;
    width: 100%;
    position: fixed;
    z-index: 1;
  `,
  Top: styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 80px;
  `,
  Bottom: styled.div``
};

export const NavbarTop = {
  Left: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      max-width: 75px;
      max-height: 75px;
      padding: 5px;
    }
  `,
  Middle: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Right: styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `
};

export const NavbarMenu = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 100%;
    width: 70%;
  `,
  Left: styled.div`
    /* flex: 1; */
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 0px;
      cursor: default;

      &:hover {
        color: darkgoldenrod;
      }
    }
  `,
  Middle: styled.div`
    /* flex: 1; */
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 0px;
      cursor: default;

      &:hover {
        color: darkgoldenrod;
      }
    }
  `,
  Right: styled.div`
    /* flex: 1; */
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 0px;
      cursor: default;

      &:hover {
        color: darkgoldenrod;
      }
    }
  `
};

export const NavbarMenuRight = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
  `,
  Left: styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  Middle: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1%;
  `,
  Right: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      text-decoration: unset;

      svg {
        &:hover {
          fill: burlywood;
        }
      }
    }
  `
};

export const NavbarBottom = {
  Left: styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Middle: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Right: styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `
};
