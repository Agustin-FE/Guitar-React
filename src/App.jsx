

import React from "react";
import { Routes, Route} from "react-router";
import { useDispatch } from "react-redux";
import { initCart } from "./store/carrito";
import { Navigate } from "react-router";



import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Details from "./commons/Details"
import Cart from "./components/Cart";
import SingIn from "./components/SingIn";
import Search from "./components/Search";
import FormCar from "./components/FormCar";
import SlideShow from "./components/SlideShow";
import Jimi from "./components/Jimi";
import EnCamino from "./components/EnCamino";


const App = () => {

  const dispatch = useDispatch()
  dispatch( initCart( { userId: 1 } ) )

  
  return (
    <>
      <Navbar />

      <SlideShow/>
      {/* <Jimi /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />   
        <Route path="/register" element={<SingIn />} />
        <Route path="/guitar/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/form_address" element={<FormCar />} />

        <Route path="/productos/:marca" element={null}/>
        <Route path="/productos/:marca/:categoria" element={null}/>
        <Route path="/productos/:marca/:categoria/:serie" element={null}/>

        <Route path="/encamino" element={<EnCamino />} />

        {/* <Route path="*" element={<Navigate to = "/"/>} /> */}

      </Routes>
      
      <Footer />
    </>
  );  
};

export default App
