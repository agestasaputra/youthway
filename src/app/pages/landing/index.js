import React from "react";
import { Container } from "./styles";
import Banner from "./sections/banner";
import LandingBanner from "app/assets/banner/landing-banner.jpg";
import NewArrival from "./sections/new-arrival";
import Catalog from "./sections/catalog";
import Tagline from "./sections/tagline";

import Tshirt from "app/assets/product/tshirt.jpg";
import Lekbong from "app/assets/product/lekbong.jpg";
import Denim from "app/assets/product/denim.jpg";
import ShortPants from "app/assets/product/short-pants.jpg";
import YTHWY from "app/assets/logo/YTHWY.png";

const Landing = () => {
  const dataBanner = LandingBanner;
  const dataNewArrival = [
    {
      id: 0,
      name: "Tshirt",
      codeName: "tshirt",
      gender: ["men", "women"],
      color: ["black", "white", "red"],
      price: 95000,
      img: Tshirt
    },
    {
      id: 1,
      name: "Lekbong",
      codeName: "lekbong",
      gender: ["men", "women"],
      color: ["blue", "red", "white"],
      price: 85000,
      img: Lekbong
    },
    {
      id: 2,
      name: "Denim",
      codeName: "denim",
      gender: ["men", "women"],
      color: ["white", "blue", "red"],
      price: 200000,
      img: Denim
    },
    {
      id: 3,
      name: "Short Pants",
      codeName: "short-pants",
      gender: ["men", "women"],
      color: ["red", "black", "white"],
      price: 85000,
      img: ShortPants
    }
  ];
  const dataCatalog = [
    {
      id: 0,
      name: "Tshirt",
      codeName: "tshirt",
      img: Tshirt
    },
    {
      id: 1,
      name: "Lekbong",
      codeName: "lekbong",
      img: Lekbong
    },
    {
      id: 2,
      name: "Denim",
      codeName: "denim",
      img: Denim
    },
    {
      id: 3,
      name: "Short Pants",
      codeName: "short-pants",
      img: ShortPants
    }
  ];
  const dataTagline = YTHWY;

  return (
    <Container>
      <Banner img={dataBanner} />
      <NewArrival dataNewArrival={dataNewArrival} />
      <Tagline img={dataTagline} />
      <Catalog dataCatalog={dataCatalog} />
    </Container>
  );
};

export default Landing;
