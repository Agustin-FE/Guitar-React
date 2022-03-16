

import React, { useEffect } from "react";
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
import { setInitCart } from "./store/carrito";
import SlideShow from "./components/SlideShow";
import EnCamino from "./components/EnCamino";


const App = () => {

  const dispatch = useDispatch()

  if ( localStorage.getItem( "cart" ) )
    dispatch( setInitCart( JSON.parse( localStorage.getItem( "cart" ) ) ) )

  
  return (
    <>
      <Navbar />
      <SlideShow/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />   
        <Route path="/register" element={<SingIn />} />
        <Route path="/guitar/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/form_address" element={<FormCar />} />

        <Route path="/productos/:marca" element={<Jimi />}/>
        <Route path="/productos/:marca/:categoria" element={<Jimi />}/>
        <Route path="/productos/:marca/:categoria/:serie" element={<Jimi />}/>

        <Route path="/encamino" element={<EnCamino />} />

        {/* <Route path="*" element={<Navigate to = "/"/>} /> */}

      </Routes>
      
      <Footer />
    </>
  );  
};

export default App
