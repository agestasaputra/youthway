import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 5%;
    background: ${color.brand.primaryBlack};
    color: ${color.brand.primaryWhite};
  `,
  Left: styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    h1 {
      color: #fff;
    }
  `,
  Right: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `
};
