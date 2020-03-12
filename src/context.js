import React from "react";

import Tshirt from "app/assets/product/tshirt.jpg";
import Lekbong from "app/assets/product/lekbong.jpg";
import Denim from "app/assets/product/denim.jpg";
import ShortPants from "app/assets/product/short-pants.jpg";
import LandingBanner from "app/assets/banner/landing-banner.jpg";
import YouthwayLogo from "app/assets/logo/youthway-logo.png";

const Context = React.createContext();

const initialState = {
  dataNavbarLarge: {
    dataCartCounter: 0
  },
  dataLandingPage: {
    dataBanner: LandingBanner,
    dataTagline: YouthwayLogo,
    dataNewArrival: [
      {
        id: 0,
        name: "Tshirt Catalog",
        type: "tshirt",
        productCode: "YTTS220220",
        gender: ["men", "women"],
        color: ["black", "white", "red"],
        price: 95000,
        img: Tshirt
      },
      {
        id: 1,
        name: "Lekbong Catalog",
        type: "lekbong",
        productCode: "YTLB220220",
        gender: ["men", "women"],
        color: ["blue", "red", "white"],
        price: 85000,
        img: Lekbong
      },
      {
        id: 2,
        name: "Denim Catalog",
        type: "long-pants",
        productCode: "YTLP220220",
        gender: ["men", "women"],
        color: ["white", "blue", "red"],
        price: 200000,
        img: Denim
      },
      {
        id: 3,
        name: "Short Pants Catalog",
        type: "short-pants",
        productCode: "YTSP220220",
        gender: ["men", "women"],
        color: ["red", "black", "white"],
        price: 85000,
        img: ShortPants
      }
    ],
    dataCatalog: [
      {
        id: 0,
        name: "Tshirt Catalog",
        productCode: "tshirt",
        img: Tshirt
      },
      {
        id: 1,
        name: "Lekbong Catalog",
        productCode: "lekbong",
        img: Lekbong
      },
      {
        id: 2,
        name: "Denim Catalog",
        productCode: "denim",
        img: Denim
      },
      {
        id: 3,
        name: "Short Pants Catalog",
        productCode: "short-pants",
        img: ShortPants
      }
    ]
  },
  dataProductListPage: {
    dataContent: {
      data: [
        {
          id: 0,
          name: "Tshirt Catalog",
          type: "tshirt",
          productCode: "YTTS220220",
          gender: ["men", "women"],
          color: ["black", "white", "red"],
          price: 95000,
          img: Tshirt
        },
        {
          id: 1,
          name: "Lekbong Catalog",
          type: "lekbong",
          productCode: "YTLB220220",
          gender: ["men", "women"],
          color: ["blue", "red", "white"],
          price: 85000,
          img: Lekbong
        },
        {
          id: 2,
          name: "Denim Catalog",
          type: "long-pants",
          productCode: "YTLP220220",
          gender: ["men", "women"],
          color: ["white", "blue", "red"],
          price: 200000,
          img: Denim
        },
        {
          id: 3,
          name: "Short Pants Catalog",
          type: "short-pants",
          productCode: "YTSP220220",
          gender: ["men", "women"],
          color: ["red", "black", "white"],
          price: 85000,
          img: ShortPants
        },
        {
          id: 4,
          name: "Short Pants Catalog",
          type: "short-pants",
          productCode: "YTSP220220",
          gender: ["men", "women"],
          color: ["red", "black", "white"],
          price: 85000,
          img: ShortPants
        },
        {
          id: 5,
          name: "Denim Catalog",
          type: "long-pants",
          productCode: "YTLP220220",
          gender: ["men", "women"],
          color: ["white", "blue", "red"],
          price: 200000,
          img: Denim
        },
        {
          id: 6,
          name: "Lekbong Catalog",
          type: "lekbong",
          productCode: "YTLB220220",
          gender: ["men", "women"],
          color: ["blue", "red", "white"],
          price: 85000,
          img: Lekbong
        },
        {
          id: 7,
          name: "Tshirt Catalog",
          type: "tshirt",
          productCode: "YTTS220220",
          gender: ["men", "women"],
          color: ["black", "white", "red"],
          price: 95000,
          img: Tshirt
        },
        {
          id: 8,
          name: "Tshirt",
          type: "tshirt",
          productCode: "YTTS220220",
          gender: ["men", "women"],
          color: ["black", "white", "red"],
          price: 95000,
          img: Tshirt
        },
        {
          id: 9,
          name: "Lekbong Catalog",
          type: "lekbong",
          productCode: "YTLB220220",
          gender: ["men", "women"],
          color: ["blue", "red", "white"],
          price: 85000,
          img: Lekbong
        },
        {
          id: 10,
          name: "Denim Catalog",
          type: "long-pants",
          productCode: "YTLP220220",
          gender: ["men", "women"],
          color: ["white", "blue", "red"],
          price: 200000,
          img: Denim
        },
        {
          id: 11,
          name: "Short Pants Catalog",
          type: "short-pants",
          productCode: "YTSP220220",
          gender: ["men", "women"],
          color: ["red", "black", "white"],
          price: 85000,
          img: ShortPants
        },
        {
          id: 12,
          name: "Short Pants Catalog",
          type: "short-pants",
          productCode: "YTSP220220",
          gender: ["men", "women"],
          color: ["red", "black", "white"],
          price: 85000,
          img: ShortPants
        },
        {
          id: 13,
          name: "Denim Catalog",
          type: "long-pants",
          productCode: "YTLP220220",
          gender: ["men", "women"],
          color: ["white", "blue", "red"],
          price: 200000,
          img: Denim
        },
        {
          id: 14,
          name: "Lekbong Catalog",
          type: "lekbong",
          productCode: "YTLB220220",
          gender: ["men", "women"],
          color: ["blue", "red", "white"],
          price: 85000,
          img: Lekbong
        },
        {
          id: 15,
          name: "Tshirt Catalog",
          type: "tshirt",
          productCode: "YTTS220220",
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
  },
  dataDetailProduct: {
    buttonAddToCart: false
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "data-navbar-large":
      return {
        ...state,
        dataNavbarLarge: action.data
      };
    case "data-landing":
      return {
        ...state,
        dataLanding: action.data
      };
    case "data-detail-product":
      return {
        ...state,
        dataDetailProduct: action.data
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
