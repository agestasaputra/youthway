import styled from "styled-components";

export const Container = styled.div`
  margin-top: 132px;
  height: 100%;
  /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); */
`;

export const Box = styled.div`
  margin: 0% auto;
  padding: 4% 0%;
  height: 100%;
  max-width: 55%;
  text-align: justify;

  .title {
    margin-bottom: 4%;
  }

  .desc {
    margin-bottom: 3%;
    line-height: 35px;
  }

  ul {
    list-style-type: upper-roman;

    li {
    }
  }
`;
