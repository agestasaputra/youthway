import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "config/routes";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
