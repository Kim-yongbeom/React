import React from "react";
import Nav from "../components/Nav/Nav";
import Product from "../components/Products/Product";
import Sliders from "../components/Sliders";

function Home() {
  return (
    <>
      <Nav />
      <div>Home</div>
      <Sliders />
      <Product />
    </>
  );
}

export default Home;
