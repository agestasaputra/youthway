import React from "react";
import { Container, Desc } from "./styles";
import { H1, H5, P3 } from "app/components/font";
import { Circle, Heart } from "react-feather";
import Size from "app/components/size";
import Button from "app/components/button";

const Preview = () => {
  return (
    <Container>
      <Desc.Wrapper>
        {/* <Desc.Head>Head</Desc.Head> */}
        <Desc.Title>
          <H1 className="title">Gazelle Public</H1>
        </Desc.Title>
        <Desc.Price>
          <H1 className="price">IDR 90K</H1>
        </Desc.Price>
        <Desc.Desc>
          <H5 className="title">Description:</H5>
          <ul>
            <li>
              <P3 className="desc">Manufacturer: China</P3>
            </li>
            <li>
              <P3 className="desc">Material: Shell 100% cotton</P3>
            </li>
            <li>
              <P3 className="desc">
                Care: Machine wash in cold water. Do not blecah and tumble dry.
                Warm iron. Do not dry cleanli
              </P3>
            </li>
          </ul>
        </Desc.Desc>
        <Desc.Color>
          <H5 className="title">Color:</H5>
          <Circle className={`circle-black active`} color="black" size="30" />
          <Circle className={`circle-red`} color="red" size="30" />
        </Desc.Color>
        <Desc.Size>
          <H5 className="title">Size:</H5>
          <Size size="S" className="active" />
          <Size size="M" />
          <Size size="L" />
          <Size size="XL" />
          <Size size="XXL" />
          <Size size="XXXL" />
        </Desc.Size>
        <Desc.Button>
          <Button className="btn-add-to-cart" width={`85%`}>
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

export default Preview;
