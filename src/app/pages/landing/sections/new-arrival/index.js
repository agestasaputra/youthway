import React from "react";
import { Container } from "./styles";
import { H1 } from "app/components/font";
import Slider from "react-slick";
import CardNewArrival from "app/components/card/new-arrival";

const NewArrival = ({ dataNewArrival }) => {
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
      <Slider {...settings}>
        <CardNewArrival
          img={dataNewArrival[0].img}
          title={dataNewArrival[0].name}
          gender={dataNewArrival[0].gender}
          color={dataNewArrival[0].color}
          price={dataNewArrival[0].price}
        />
        <CardNewArrival
          img={dataNewArrival[1].img}
          title={dataNewArrival[1].name}
          gender={dataNewArrival[1].gender}
          color={dataNewArrival[1].color}
          price={dataNewArrival[1].price}
        />
        <CardNewArrival
          img={dataNewArrival[2].img}
          title={dataNewArrival[2].name}
          gender={dataNewArrival[2].gender}
          color={dataNewArrival[2].color}
          price={dataNewArrival[2].price}
        />
        <CardNewArrival
          img={dataNewArrival[3].img}
          title={dataNewArrival[3].name}
          gender={dataNewArrival[3].gender}
          color={dataNewArrival[3].color}
          price={dataNewArrival[3].price}
        />
      </Slider>
    </Container>
  );
};

export default NewArrival;
