import styled from "styled-components";

export const Content = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 5% 15% 5% 15%;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 4%;

    img {
      width: 35%;
      height: 35%;
      margin: 5% 0%;
    }
  `,
  Body: styled.div`
    display: flex;
    flex-flow: column nowrap;
  `
};

export const Body = {
  Top: styled.div`
    input {
      height: 3vw;
      padding: 0% 5%;
      margin-bottom: 4%;
      width: 100%;
      display: block;
      border: 1px solid #e5e5e5;
    }
  `,
  Middle: styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `,
  Bottom: styled.div`
    text-align: center;

    p {
      &.top {
        color: #8d8d8d;
        font-size: 11px;
        margin: 10% 0% 4% 0%;
      }
      &.bottom {
        color: #8d8d8d;
        font-size: 11px;
        margin: 2% 0%;
      }
    }

    a {
      color: #8d8d8d;
      font-size: 11px;
      text-decoration: underline;
    }

    button {
      width: 100%;
      padding: 4%;
      background: black;
      color: #fff;
      cursor: pointer;
    }
  `
};

export const Middle = {
  Left: styled.div`
    h5 {
      font-family: "Helvetica", sans-serif;
      font-size: 11px;
      color: #8d8d8d;
      font-weight: unset;
    }
  `,
  Right: styled.div`
    a,
    h5 {
      font-family: "Helvetica", sans-serif;
      font-size: 11px;
      color: #8d8d8d;
      font-weight: unset;
    }
  `
};
