import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = styled.div`
  padding-bottom: 2%;

  .title {
    margin: 2% 0%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: ${color.brand.primaryBlack};
  margin: 5% 0%;
  padding: 0% 2%;
  cursor: pointer;

  .title {
    color: ${color.brand.primaryWhite};
    cursor: pointer;

    :hover {
      color: burlywood;
    }
  }

  svg {
    cursor: pointer;
  }
`;

export const ListCheckbox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 2% 0%;
  padding: 0% 2%;

  label {
    cursor: pointer;

    :hover {
      p {
        color: darkgoldenrod;
      }
    }
  }
`;
