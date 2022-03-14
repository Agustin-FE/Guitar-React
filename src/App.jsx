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
import Search from "./components/Search";
import FormCar from "./components/FormCar";
import { useDispatch } from "react-redux";
import { setCarrito } from "./store/carrito";


const App = () => {

  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<SingIn />} />
        <Route path="/guitar/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/form_address" element={<FormCar />} />

        <Route path="/gibson/electric" element={null}/>
        <Route path="/gibson/acoustic" element={null}/>
        <Route path="/fender/electric" element={null}/>
        <Route path="/fender/acoustic" element={null}/>
        <Route path="/taylor/electric" element={null}/>
        <Route path="/taylor/acoustic" element={null}/>
        
        <Route path="*" element={<Navigate to = "/"/>} />

      </Routes>
      
      <Footer />
    </>
  );  
};

export default App
