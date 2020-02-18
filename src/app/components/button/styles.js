import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = styled.div`
  background: ${color.brand.primaryBlack};
  cursor: pointer;

  &.btn-page {
    border-radius: 5em;
    color: ${color.brand.primaryWhite};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.5vw;
    height: 2.5vw;
    max-width: 50px;
    max-height: 50px;
    margin: 0px 5px;
  }
`;
