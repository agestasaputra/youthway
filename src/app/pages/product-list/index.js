import React from "react";
import { Container, Filter } from "./styles";
import Filters from "./sections/filters";
import Contents from "./sections/contents";
import Breadcrumb from "app/components/breadcrumb";
import Sort from "app/components/sort";
import { Plus, Minus } from "react-feather";
import { P3 } from "app/components/font";

const ProductList = ({ state, dispatch }) => {
  const [filter, setFilter] = React.useState(true);
  return (
    <Container.Wrapper>
      <Container.Top>
        <Filter>
          {filter ? (
            <Minus color="black" size="15" />
          ) : (
            <Plus color="black" size="15" />
          )}
          &nbsp;<P3 onClick={() => setFilter(!filter)}>Filter</P3>
        </Filter>
        <Breadcrumb path="/products/tshirts" />
        <Sort items={15} sortBy={state.dataProductListPage.dataSortBy} />
      </Container.Top>
      <Container.Bottom>
        {filter && <Filters />}
        <Contents state={state} dispatch={dispatch} />
      </Container.Bottom>
    </Container.Wrapper>
  );
};

export default ProductList;
