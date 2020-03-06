import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = styled.div`
  width: 50%;

  .title {
    margin-bottom: 10px;
  }

  svg {
    margin: 0px 3px -5px 0px;
  }

  .desc {
    font-weight: unset;
    color: ${color.gray};
  }
`;
