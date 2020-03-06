import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${color.brand.primaryBlack};
  color: #fff;
  cursor: pointer;
  width: ${props => props.width && props.width};
  padding: 8px 0px;

  :hover {
    opacity: 0.8;
  }

  svg {
    fill: #fff;
  }

  &.outline {
    border: 1px solid black;
    background: #fff;
    color: ${color.brand.primaryBlack};

    :hover {
      svg {
        fill: ${color.brand.primaryBlack};
      }
    }
  }

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
