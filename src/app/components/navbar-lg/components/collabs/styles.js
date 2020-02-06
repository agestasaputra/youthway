import styled from "styled-components";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 5% 15% 5% 15%;
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
