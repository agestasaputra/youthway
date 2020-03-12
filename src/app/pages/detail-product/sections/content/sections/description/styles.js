import styled from "styled-components";
import color from "config/guidlines/color";

export const Container = styled.div``;

export const Desc = {
  Wrapper: styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 35%;
    margin-bottom: 60px;
    width: 80%;
  `,
  Head: styled.div``,
  Title: styled.div`
    .title {
    }
  `,
  Price: styled.div`
    margin: 20px 0px;

    .price {
      color: ${color.lightGray};
    }
  `,
  Desc: styled.div`
    .title {
      /* color: ${color.gray}; */
    }

    ul {
      padding-left: 15px;
      color: ${color.gray};

      li {
        .desc {
          font-weight: unset;
          color: ${color.gray};
        }
      }
    }
  `,
  Color: styled.div`
    margin: 20px 0px 15px 0px;

    .title {
      /* color: ${color.gray}; */
      margin-bottom: 5px;
    }

    svg {
      margin: 0px 5px 0px 0px;
      opacity: 0.5;
      cursor: pointer;

      &.circle-black {
        fill: black;

        &:hover {
          opacity: 1;
        }
      }

      &.circle-red {
        fill: red;

        &:hover {
          opacity: 1;
        }
      }

      &.active {
        opacity: 1;
      }
    }
  `,
  Size: styled.div`
    margin-bottom: 30px;
    .title {
      /* color: ${color.gray}; */
    }
  `,
  Button: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  `
};
