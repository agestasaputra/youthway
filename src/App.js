import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "config/routes";

function App({ props }) {
  // console.log("cek props:", props);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
