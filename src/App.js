import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
//firebase
import { firebaseAuth, onAuthStateChanged } from "./firebase";
//components
import Header from "./components/header/Header"
import Footer from "./components/footer"
//pages
import MainPage from "./pages/mainPage/MainPage"
import DetailPage from './pages/detailPage/DetailPage';
import Cart from "./pages/cart/Cart";
import MenuDetail from "./pages/detailPage/MenuDetail";
import Login from "./pages/user/login";
import SignUp from "./pages/user/signUp";
import SearchDetail from "./pages/detailPage/SearchDetail ";
import CateDetail from "./pages/detailPage/CateDetail";
//data
import ItemData from "./dummy/data.json"

function App() {

  const [items, setItems] = useState(ItemData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const obj = { items }
  localStorage.setItem('data', JSON.stringify(obj))

  /* 현재 로그인한 유저 데이터 저장 */
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log(user)
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="Wrapper">
        <div className="contentWrapper">
          <Header
            items={items}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route path="/" element={<MainPage items={items} />} />
            <Route path="/detail/:id" element={<DetailPage items={items} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu/:name" element={<MenuDetail items={items} setItems={setItems} />} />
            <Route path="/category/:category" element={<CateDetail items={items} setItems={setItems} />} />
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/search" element={<SearchDetail items={items} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
