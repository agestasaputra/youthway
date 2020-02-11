import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = {
  Wrapper: styled.div`
    display: none;

    &.show {
      position: fixed;
      top: 110px;
      left: 0px;
      background: ${color.brand.primaryWhite};
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      border-top: 1px solid rgba(0, 0, 0, 0.125);
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    }
  `,
  Left: styled.div`
    display: flex;
    flex-flow: column nowrap;
  `,
  Middle: styled.div`
    display: flex;
    flex-flow: column nowrap;
  `,
  Right: styled.div`
    display: flex;
    flex-flow: column nowrap;
  `
};
