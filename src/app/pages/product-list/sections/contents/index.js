import React from "react";
import { Container } from "./styles";
import CardNewArrival from "app/components/card/new-arrival";
import Pagination from "app/components/pagination";

const Contents = ({ state, dispatch, location }) => {
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
              name={item.name}
              codeName={item.codeName}
              type={item.type}
              gender={item.gender}
              color={item.color}
              price={item.price}
              location={location}
            />
          );
        })}
      <Pagination
        totalPages={28}
        activePage={state.dataProductListPage.dataContent.activePage}
        onPrevPage={onPrevPageHandler}
        onNextPage={onNextPageHandler}
        onNumberPage={onNumberPageHandler}
      />
    </Container>
  );
};

export default Contents;
