import React from "react";
import { Routes, Route, Navigate } from "react-router";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Jimi from "./components/Jimi";
import Details from "./commons/Details"
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";
import SingIn from "./components/SingIn";
import { LogIn } from "./components/Logueo";
import Search from "./components/Search";


const App = () => {
  return (
    <>
      <Navbar />
      <Jimi />
      {/* <Carousel /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/guitar/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SingIn />} />
        <Route path="*" element={<Navigate to = "/"/>} />
      </Routes>

      <Footer />

    </>
  );  
};

export default App
