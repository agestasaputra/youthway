import styled from "styled-components";

export const Container = styled.div`
  width: 40%;

  .title {
    margin-bottom: 10px;
  }
`;

export const SocialMedia = styled.div`
  width: 40%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  i {
    font-size: 30px;
    cursor: pointer;
  }
`;
