import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';

//components
import Header from "./components/header/Header"
import Footer from "./components/footer"

//pages
import MainPage from "./pages/mainPage/MainPage"
import DetailPage from './pages/detailPage/DetailPage';
import Cart from "./pages/cart/Cart";
import MenuDetail from "./pages/MenuDetail";
import Login from "./pages/user/login";
import SignUp from "./pages/user/signUp";
import SearchDetail from "./pages/SearchDetail ";

//data
import ItemData from "./dummy/data.json"

function App() {

  const [items] = useState(ItemData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const obj = { items }
  localStorage.setItem('data', JSON.stringify(obj))

  return (
    <React.Fragment>
      <div className="Wrapper">
        <div className="contentWrapper">
          <Header 
            items={items} 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn}
          />
          <Routes>
            <Route path="/" element={<MainPage items={items} />} />
            <Route path="/detail/:id" element={<DetailPage items={items} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu/:name" element={<MenuDetail items={items} />} />
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/search" element={<SearchDetail items={items}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
