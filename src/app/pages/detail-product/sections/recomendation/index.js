import React from "react";
import { Container } from "./styles";
import { H1 } from "app/components/font";
import Slider from "react-slick";
import CardNewArrival from "app/components/card/new-arrival";

const Recomendation = ({ state, dispatch, location }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <Container>
        <H1>NEW ARRIVALS</H1>
        {state.dataDetailProduct.dataNewArrival && state.dataDetailProduct.dataNewArrival.length > 0 && (
        <Slider {...settings}>
            {state.dataDetailProduct.dataNewArrival.map((item, index) => (
            <CardNewArrival
                key={index}
                img={item.img}
                name={item.name}
                productCode={item.productCode}
                type={item.type}
                gender={item.gender}
                color={item.color}
                price={item.price}
                location={location}
            />
            ))}
        </Slider>
        )}
    </Container>
  );
};

export default Recomendation;
