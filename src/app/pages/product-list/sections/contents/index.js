import React from "react";
import { Container } from "./styles";
import CardNewArrival from "app/components/card/new-arrival";

import Tshirt from "app/assets/product/tshirt.jpg";
import Lekbong from "app/assets/product/lekbong.jpg";
import Denim from "app/assets/product/denim.jpg";
import ShortPants from "app/assets/product/short-pants.jpg";

const Contents = () => {
  const dataNewArrival = {
    data: [
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
      },
      {
        id: 4,
        name: "Short Pants",
        codeName: "short-pants",
        gender: ["men", "women"],
        color: ["red", "black", "white"],
        price: 85000,
        img: ShortPants
      },
      {
        id: 5,
        name: "Denim",
        codeName: "denim",
        gender: ["men", "women"],
        color: ["white", "blue", "red"],
        price: 200000,
        img: Denim
      },
      {
        id: 6,
        name: "Lekbong",
        codeName: "lekbong",
        gender: ["men", "women"],
        color: ["blue", "red", "white"],
        price: 85000,
        img: Lekbong
      },
      {
        id: 7,
        name: "Tshirt",
        codeName: "tshirt",
        gender: ["men", "women"],
        color: ["black", "white", "red"],
        price: 95000,
        img: Tshirt
      },
      {
        id: 8,
        name: "Tshirt",
        codeName: "tshirt",
        gender: ["men", "women"],
        color: ["black", "white", "red"],
        price: 95000,
        img: Tshirt
      },
      {
        id: 9,
        name: "Lekbong",
        codeName: "lekbong",
        gender: ["men", "women"],
        color: ["blue", "red", "white"],
        price: 85000,
        img: Lekbong
      },
      {
        id: 10,
        name: "Denim",
        codeName: "denim",
        gender: ["men", "women"],
        color: ["white", "blue", "red"],
        price: 200000,
        img: Denim
      },
      {
        id: 11,
        name: "Short Pants",
        codeName: "short-pants",
        gender: ["men", "women"],
        color: ["red", "black", "white"],
        price: 85000,
        img: ShortPants
      },
      {
        id: 12,
        name: "Short Pants",
        codeName: "short-pants",
        gender: ["men", "women"],
        color: ["red", "black", "white"],
        price: 85000,
        img: ShortPants
      },
      {
        id: 13,
        name: "Denim",
        codeName: "denim",
        gender: ["men", "women"],
        color: ["white", "blue", "red"],
        price: 200000,
        img: Denim
      },
      {
        id: 14,
        name: "Lekbong",
        codeName: "lekbong",
        gender: ["men", "women"],
        color: ["blue", "red", "white"],
        price: 85000,
        img: Lekbong
      },
      {
        id: 15,
        name: "Tshirt",
        codeName: "tshirt",
        gender: ["men", "women"],
        color: ["black", "white", "red"],
        price: 95000,
        img: Tshirt
      }
    ],
    activePage: 1,
    totalPage: 20,
    totalItems: 160
  };

  return (
    <Container>
      {dataNewArrival.data &&
        dataNewArrival.data.map((item, index) => {
          return (
            <CardNewArrival
              width={"25%"}
              key={index}
              img={item.img}
              title={item.title}
              gender={item.gender}
              color={item.color}
              price={item.price}
            />
          );
        })}
      {/* <Pagination
        totalPages={20}
        activePages={}
        onPrevPage={}
        onNextPage={}
        onNumberPage={}
      /> */}
    </Container>
  );
};

export default Contents;
