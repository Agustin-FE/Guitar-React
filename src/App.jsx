import React from "react";
import "./templates/tiles.css"
import "./templates/home.css"
import { Routes, Route } from "react-router";

import Footbar from "./components/Footbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Header from "./components/Header";
import Details from "./commons/Details"


const App = () => {
  return (
    <>
      
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>

      <Footbar />

    </>
  );
};

export default App
