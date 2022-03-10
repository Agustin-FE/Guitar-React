import React from "react";
import "./templates/tiles.css"
import "./templates/home.css"
import { Routes, Route } from "react-router";

import Footbar from "./components/Footbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Jimi from "./components/Jimi";
import Details from "./commons/Details"
import Cart from "./components/Cart";


const App = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Jimi />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footbar />

    </>
  );  
};

export default App
