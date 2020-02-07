import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = styled.div`
  padding: 1%;
  /* background: ${color.brand.primaryWhite}; */
  background: #f7f7f7;
  position: absolute;
  top: 30px;
  right: 0%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 3px 49px 0 rgba(0, 0, 0, 0.2);
  width: 10.5%;

  ul {
    list-style-type: none;

    li {
      
      a {
        text-decoration: none;

        h5 {
          font-size: 12px;
          color: ${color.brand.primaryBlack};
          margin: 6% 0%;

          &:hover {
            color: darkgoldenrod;
          }
        }
      }
    }
  }
`;
