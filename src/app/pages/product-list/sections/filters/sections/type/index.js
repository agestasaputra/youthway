import React from "react";
import { Container, Header, ListCheckbox } from "./styles";
import { H4, P3 } from "app/components/font";
import { Plus, Minus } from "react-feather";

const Type = () => {
  const [collapse, setCollapse] = React.useState(true);
  return (
    <Container>
      <Header onClick={() => setCollapse(!collapse)}>
        <H4 className="title">Type</H4>
        {collapse ? (
          <Minus
            color="white"
            size="15"
            onClick={() => setCollapse(!collapse)}
          />
        ) : (
          <Plus
            color="white"
            size="15"
            onClick={() => setCollapse(!collapse)}
          />
        )}
      </Header>
      {collapse && (
        <React.Fragment>
          <ListCheckbox>
            <input id="list-1" type="checkbox" value="false" />
            &nbsp; &nbsp;
            <label htmlFor="list-1">
              <P3>S</P3>
            </label>
          </ListCheckbox>
          <ListCheckbox>
            <input id="list-2" type="checkbox" value="false" />
            &nbsp; &nbsp;
            <label htmlFor="list-2">
              <P3>M</P3>
            </label>
          </ListCheckbox>
          <ListCheckbox>
            <input id="list-3" type="checkbox" value="false" />
            &nbsp; &nbsp;
            <label htmlFor="list-3">
              <P3>L</P3>
            </label>
          </ListCheckbox>
          <ListCheckbox>
            <input id="list-4" type="checkbox" value="false" />
            &nbsp; &nbsp;
            <label htmlFor="list-4">
              <P3>XL</P3>
            </label>
          </ListCheckbox>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Type;
