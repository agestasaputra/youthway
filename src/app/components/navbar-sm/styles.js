import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* height: 5%; */
    height: 30px;
    /* width: 100%; */
    width: -webkit-fill-available;
    left: 0px;
    background: ${color.brand.primaryBlack};
    color: ${color.brand.primaryWhite};
    position: fixed;
    top: 0%;
    z-index: 99;
  `,
  Left: styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;

      h5 {
        color: ${color.brand.primaryWhite};
      }
    }
  `,
  Right: styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    h5 {
      color: ${color.brand.primaryWhite};
    }
  `
};

export const ContainerLeft = {
  Left: styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    padding: 0% 2%;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.5);

    h5 {
      margin: 0px;

      &:hover {
        color: burlywood;
      }
    }
  `,
  Right: styled.div`
    flex: 10;
    display: flex;
    align-items: center;
  `
};

export const ContainerRight = {
  Left: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0% 2%;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  `,
  Middle: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0% 2%;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid red;
    }

    h5 {
      margin: 0px;
      cursor: pointer;

      &:hover {
        color: burlywood;
      }
    }
  `,
  Right: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0% 2%;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid red;
    }

    h5 {
      margin: 0px;
      cursor: pointer;

      &:hover {
        color: burlywood;
      }
    }
  `
};
