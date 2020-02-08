import styled from "styled-components";

export const Container = {
  Wrapper: styled.div`
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  `,
  Top: styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 1%;
    justify-content: space-between;

    h1 {
      text-transform: capitalize;
    }
  `,
  Bottom: styled.div`
    display: flex;
    flex-flow: row nowrap;
  `
};

export const Filter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    display: inline-block;
  }

  p {
    display: inline-block;
    cursor: pointer;

    :hover {
      color: darkgoldenrod;
    }
  }
`;
