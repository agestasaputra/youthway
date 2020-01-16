import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "config/routes";
import Navbar from "app/components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
