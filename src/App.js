import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

//css
import './App.css';

//components
import Header from "./components/header/Header"
import Footer from "./components/footer"

//pages
import MainPage from "./pages/mainPage/MainPage"
import DetailPage from './pages/detailPage/DetailPage';
import Cart from "./pages/cart/Cart";
import MenuList from "./pages/MenuList";
import Login from "./pages/user/login";
import SignUp from "./pages/user/signUp";

//data
import ItemData from "./db/data.json"


function App() {

  const [items] = useState(ItemData);

  const obj = { items }

  localStorage.setItem('data', JSON.stringify(obj))


  return (
    <React.Fragment>
      <div className="Wrapper">
        <div className="contentWrapper">
          <Header items={items}/>
          <Routes>
            <Route path="/" element={<MainPage items={items} />} />
            <Route path="/detail/:id" element={<DetailPage items={items} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu/:name" element={<MenuList items={items} />} />
            <Route path="/login" element={<Login items={items} />} />
            <Route path="/sign-up" element={<SignUp items={items} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
