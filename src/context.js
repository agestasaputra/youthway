import React from "react";

import Tshirt from "app/assets/product/tshirt.jpg";
import Lekbong from "app/assets/product/lekbong.jpg";
import Denim from "app/assets/product/denim.jpg";
import ShortPants from "app/assets/product/short-pants.jpg";
import LandingBanner from "app/assets/banner/landing-banner.jpg";
import YouthwayLogo from "app/assets/logo/youthway-logo.png";

const Context = React.createContext();

const initialState = {
  dataLandingPage: {
    dataBanner: LandingBanner,
    dataTagline: YouthwayLogo,
    dataNewArrival: [
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
    ],
    dataCatalog: [
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
    ]
  },
  dataProductListPage: {
    dataContent: {
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
    },
    dataSortBy: [
      {
        id: 1,
        name: "Newest"
      },
      {
        id: 2,
        name: "Lowest Price"
      },
      {
        id: 3,
        name: "Highest Price"
      },
      {
        id: 4,
        name: "Best Seller"
      }
    ]
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "data-landing":
      return {
        ...state,
        dataLanding: action.data
      };
    default:
      console.log("error case reducer on root context");
      throw new Error();
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
