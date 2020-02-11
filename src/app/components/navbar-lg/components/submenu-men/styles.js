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
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
  `,
  Middle: styled.div`
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
  `,
  Right: styled.div`
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
  `
};

export const ContainerMiddle = {
  Left: styled.div`
    flex: 1;
    border-left: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0% 8%;
    margin: 8% 0%;

    h4 {
      margin-bottom: 6%;
    }

    a {
      text-decoration: none;

      h5,
      h6,
      p {
        line-height: 30px;

        :hover {
          color: darkgoldenrod;
        }
      }

      h5 {
        font-weight: unset;
      }
    }
  `,
  Right: styled.div`
    flex: 1;
    border-right: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0% 8%;
    margin: 8% 0%;

    h4 {
      margin-bottom: 6%;
    }

    a {
      text-decoration: none;

      h5,
      h6,
      p {
        line-height: 30px;

        :hover {
          color: darkgoldenrod;
        }
      }

      h5 {
        font-weight: unset;
      }
    }
  `
};

export const ContainerLeft = {
  Left: styled.div`
    flex: 1.5;
    border-left: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0% 8%;
    margin: 8% 0%;

    img {
      width: 100%;
    }

    a {
      text-decoration: none;

      h5 {
        :hover {
          color: darkgoldenrod;
        }
      }
    }
  `,
  Right: styled.div`
    flex: 1;
    padding: 0% 8%;
    margin: 8% 0%;

    h4 {
      margin-bottom: 6%;
    }

    a {
      text-decoration: none;

      h5,
      h6,
      p {
        line-height: 30px;

        :hover {
          color: darkgoldenrod;
        }
      }

      h5 {
        font-weight: unset;
      }
    }
  `
};

export const Catalog = styled.div`
  display: inline-block;
  width: 40%;
  padding: 0% 8%;
  margin: 8% 0%;

  img {
    width: 100%;
  }

  a {
    text-decoration: none;

    h5 {
      :hover {
        color: darkgoldenrod;
      }
    }
  }
`;
