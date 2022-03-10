import React from "react";
import "./templates/tiles.css"
import "./templates/home.css"
import { Routes, Route } from "react-router";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Jimi from "./components/Jimi";
import Details from "./commons/Details"
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";
import FormCar from "./components/FormCar";


const App = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Jimi />
      {/* <Carousel /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guitar/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/form_address" element={<FormCar />} />
      </Routes>

      <Footer />

    </>
  );  
};

export default App
