import React from "react";
import { Container, Filter } from "./styles";
import Filters from "./sections/filters";
import Contents from "./sections/contents";
import Pagination from "app/components/pagination";
import Sort from "app/components/sort";
import { Plus, Minus } from "react-feather";
import { P3 } from "app/components/font";

const ProductList = props => {
  const sortBy = [
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
  ];

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
        <Pagination path="/products/tshirts" />
        <Sort items={15} sortBy={sortBy} />
      </Container.Top>
      <Container.Bottom>
        {filter && <Filters />}
        <Contents />
      </Container.Bottom>
    </Container.Wrapper>
  );
};

export default ProductList;
