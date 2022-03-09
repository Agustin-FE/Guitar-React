import React from "react";
import "./templates/tiles.css"
import { Routes, Route } from "react-router";

import Footbar from "./components/Footbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Header from "./components/Header";
import Details from "./commons/Details"
import Cart from "./components/Cart";


const App = () => {
  return (
  <>
      <Cart />
      </>
  );
};

export default App
