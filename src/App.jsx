import React from "react";
import { Routes, Route } from "react-router";

import Footbar from "./components/Footbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Header from "./components/Header";


const App = () => {
  return (
    <>
     
      <Header />
      <Navbar />
      <SearchBar />
      


    <Routes>
      <Route path="/" element={<Home />}/>
      {/* <Route path="/profile" element={<Profile />}/> */}
    </Routes>

    <Footbar />
      

    </>
  );
};

export default App
