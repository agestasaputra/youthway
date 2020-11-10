import styled from "styled-components";

export const Container = styled.div`
  margin: 0% 3%;

  h1 {
    margin: 0px;
    padding: 4%;
    text-align: center;
  }

  .slick-slider {
    height: 100%;

    .slick-prev {
      &:before {
        font-family: "FontAwesome";
        content: "\f053";
        color: black;
      }

      &.slick-disabled {
        cursor: not-allowed;
      }
    }

    .slick-next {
      &:before {
        font-family: "FontAwesome";
        content: "\f054";
        color: black;
      }

      &.slick-disabled {
        cursor: not-allowed;
      }
    }

    .slick-list {
      /* height: 100%; */

      .slick-track {
        /* height: 100%; */

        .slick-slide {
          /* display: flex;
          align-items: center;
          height: 100%; */

          div {
            .card-img {
              /* height: 100%; */

              img {
                /* max-width: 80%;
                max-height: 100%; */
              }
            }
          }
        }
      }
    }
  }
`;
