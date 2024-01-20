import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./components/home/index";
import About from "./components/home/about";
import Product from "./components/home/product";
import Contact from "./components/home/contact";
import Singalpage from "./components/home/singalpage";
import Cart from "./components/home/cart";
import Error from "./components/home/error";
import Header from "./components/Header/index";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singalpage/:id" element={<Singalpage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>

    </BrowserRouter>
    </>

  );
}

export default App;
