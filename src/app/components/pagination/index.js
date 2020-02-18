import React from "react";
import { Container } from "./styles";
import Button from "app/components/button";

const Pagination = ({
  totalPages,
  activePage,
  onNextPage,
  onPrevPage,
  onNumberPage
}) => {
  const [pages, setPages] = React.useState([]);
  const [startPage, setStartPage] = React.useState(0);
  const [minStartPage] = React.useState(0);
  const [maxStartPage, setMaxStartPage] = React.useState(0);

  React.useEffect(() => {
    console.log("cek pages:", pages);
    const validation = () => {
      if (pages[pages.length - 1] !== 5) {
        let loopMax = 5 - pages[pages.length - 1].length;
        for (let i = 0; i < loopMax; i++) {
          let num = pages[pages.length - 2].length - 1 - i;
          pages[pages.length - 1].unshift(pages[pages.length - 2][num]);
        }
      }
      return;
    };

    pages && pages.length > 0 && setMaxStartPage(pages.length - 1);
    pages && pages.length > 0 && validation();
  }, [pages]);

  React.useEffect(() => {
    const showingPages = () => {
      let tmp = [];
      for (let i = 0; i < totalPages; i++) {
        tmp.push(
          <Button className="btn-page" funcPage={onNumberPage} key={i}>
            {i + 1}
          </Button>
        );
      }
      let jkl = [];
      for (let j = 0; j < Math.ceil(tmp.length / 5); j++) {
        let asd = tmp.slice(j * 5, j * 5 + 5);
        jkl.push(asd);
      }
      setPages(jkl);
      return;
    };
    totalPages && showingPages();
  }, [totalPages, onNumberPage]);

  const onNextHandler = () => {
    startPage + 1 <= maxStartPage && setStartPage(startPage + 1);
    onNextPage();
    return;
  };

  const onPrevHandler = () => {
    startPage - 1 >= minStartPage && setStartPage(startPage - 1);
    onPrevPage();
    return;
  };

  return (
    <Container>
      <Button className="btn-page" funcPage={onPrevHandler}>
        {`<`}
      </Button>
      {pages && pages.length > 0 && pages[startPage].map(item => item)}
      <Button className="btn-page" funcPage={onNextHandler}>
        {`>`}
      </Button>
    </Container>
  );
};

export default Pagination;
