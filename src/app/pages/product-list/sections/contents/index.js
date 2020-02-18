import React from "react";
import { Container } from "./styles";
import CardNewArrival from "app/components/card/new-arrival";
import Pagination from "app/components/pagination";

const Contents = ({ state, dispatch }) => {
  const onPrevPageHandler = () => {
    console.log("onPrevPageHandler worked!");
    return;
  };

  const onNextPageHandler = () => {
    console.log("onNextPageHandler worked!");
    return;
  };

  const onNumberPageHandler = num => {
    console.log("cek num onNumberPageHandler:", num);
    return;
  };

  return (
    <Container>
      {state.dataProductListPage.dataContent.data &&
        state.dataProductListPage.dataContent.data.map((item, index) => {
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
      <Pagination
        totalPages={22}
        activePage={state.dataProductListPage.dataContent.activePage}
        onPrevPage={onPrevPageHandler}
        onNextPage={onNextPageHandler}
        onNumberPage={onNumberPageHandler}
      />
    </Container>
  );
};

export default Contents;
