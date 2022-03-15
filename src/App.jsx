<<<<<<< HEAD
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
=======
import React from "react";
import { Routes, Route} from "react-router";
>>>>>>> 02953feb1e95ce5ec7a22483c969ebad776e7bac

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


const App = () => {

  const dispatch = useDispatch()

  if ( localStorage.getItem( "cart" ) )
    dispatch( setInitCart( JSON.parse( localStorage.getItem( "cart" ) ) ) )

  
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

        <Route path="/productos/:marca" element={<Jimi />}/>
        <Route path="/productos/:marca/:categoria" element={<Jimi />}/>
        <Route path="/productos/:marca/:categoria/:serie" element={<Jimi />}/>

        {/* <Route path="*" element={<Navigate to = "/"/>} /> */}

      </Routes>
      
      <Footer />
    </>
  );  
};

export default App
