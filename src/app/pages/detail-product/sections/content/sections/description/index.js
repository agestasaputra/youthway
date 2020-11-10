import React from "react";
import { Container, Desc } from "./styles";
import { H1, H5, P3 } from "app/components/font";
import { Circle, Heart } from "react-feather";
import Size from "app/components/size";
import Button from "app/components/button";

const Description = ({ state, dispatch }) => {
  console.log("cek state on desc:", state);
//   const [color, setColor] = React.useState(null);
  const [size, setSize] = React.useState(null);

  const addToCartHandler = () => {
    dispatch({
      type: "data-navbar-large",
      data: {
        dataCartCounter: state.dataNavbarLarge.dataCartCounter + 1
      }
    });
    dispatch({
      type: "data-detail-product",
      data: {
        buttonAddToCart: true
      }
    });
    return;
  };

  const sizeHandler = (size) => {
    console.log('sizeHandler:', size);

    // remove active mark
    const elementExtraSmallSize = document.querySelector(`.btn-size-xs`);
    const elementSmallSize = document.querySelector(`.btn-size-s`);
    const elementMediumSize = document.querySelector(`.btn-size-m`);
    const elementLargeSize = document.querySelector(`.btn-size-l`);
    const elementExtraLargeSize = document.querySelector(`.btn-size-xl`);
    const elementDoubleExtraLargeSize = document.querySelector(`.btn-size-xxl`);
    elementExtraSmallSize.classList.remove("active");
    elementSmallSize.classList.remove("active");
    elementMediumSize.classList.remove("active");
    elementLargeSize.classList.remove("active");
    elementExtraLargeSize.classList.remove("active");
    elementDoubleExtraLargeSize.classList.remove("active");

    const elementSize = document.querySelector(`.btn-size-${size.toLowerCase()}`);
    elementSize.classList.add("active");
    setSize(size);
  }

  return (
    <Container>
      <Desc.Wrapper>
        {/* <Desc.Head>Head</Desc.Head> */}
        <Desc.Title>
          <H1 className="title">{state.dataDetailProduct.name}</H1>
        </Desc.Title>
        <Desc.Price>
        <H1 className="price">IDR {state.dataDetailProduct.price}</H1>
        </Desc.Price>
        <Desc.Desc>
          <H5 className="title">Description:</H5>
          <ul>
            {
              state.dataDetailProduct.description && state.dataDetailProduct.description.length > 0 &&
                state.dataDetailProduct.description.map((item, index) => (
                    <li key={index}>
                        <P3 className="desc">{item.name}</P3>
                    </li>
                ))
            }
          </ul>
        </Desc.Desc>
        <Desc.Color>
          <H5 className="title">Color:</H5>
          {
              state.dataDetailProduct.color && state.dataDetailProduct.color.length > 0 &&
                state.dataDetailProduct.color.map((item, index) => (
                    <Circle key={index} className={`circle-${item.name.toLowerCase()}`} color={item.name.toLowerCase()} size="30" />
                ))
            }
        </Desc.Color>
        <Desc.Size>
          <H5 className="title">Size:</H5>
          {
            state.dataDetailProduct.size && state.dataDetailProduct.size.length > 0 &&
                state.dataDetailProduct.size.map((item, index) => (
                    <Size key={index} className={`btn-size-${item.name.toLowerCase()}`} size={item.name} onClick={() => sizeHandler(item.name)} />
                ))
          }
        </Desc.Size>
        <Desc.Button>
          <Button
            className={`${size ? `btn-add-to-cart` : `btn-add-to-cart disabled`}`}
            // className={`${
            //   state.dataDetailProduct.buttonAddToCart
            //     ? `btn-add-to-cart disabled`
            //     : `btn-add-to-cart`
            // }`}
            // className={`${
            //   size ? state.dataDetailProduct.buttonAddToCart ? `btn-add-to-cart disabled` : 'btn-add-to-cart'
            //   : `btn-add-to-cart disabled`
            // }`}
            width={`85%`}
            onClick={addToCartHandler}
          >
            ADD TO CART
          </Button>
          <Button className="btn-wishlist outline" width={`12%`}>
            <Heart color="black" size="20" stroke="#000000" />
          </Button>
        </Desc.Button>
      </Desc.Wrapper>
    </Container>
  );
};

export default Description;
