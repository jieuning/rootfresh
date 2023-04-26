import "./App.css"
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
//mobile page
import MobCategoryNav from "./components/mobile/mobCategoryNav";
import MobSearch from "./components/mobile/mobSearch";
import MobMypage from "./components/mobile/mobMypage";
//data
import ItemData from "./dummy/data.json"
//responsive
import { Pc } from "./components/mobile/responsive";


function App() {

  const navigate = useNavigate();

  const [items, setItems] = useState(ItemData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const obj = { items }
  localStorage.setItem('data', JSON.stringify(obj))

  /* 현재 로그인한 유저 데이터 저장 */
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <div id="app">
      <Pc>
        <Header items={items} isLoggedIn={isLoggedIn}/>
      </Pc>
      <Routes>
        <Route path="/" element={<MainPage items={items} />} />
        <Route path="/detail/:id" element={<DetailPage items={items} />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/menu/:name" element={<MenuDetail items={items} setItems={setItems} navigate={navigate} />} />
        <Route path="/category/:category" element={<CateDetail items={items} setItems={setItems} />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/search" element={<SearchDetail items={items} navigate={navigate} />} />
        {/* 모바일 */}
        <Route path="/m_category_nav" element={<MobCategoryNav/>} />
        <Route path="/m_category_nav/category/:category" element={<CateDetail items={items} setItems={setItems} navigate={navigate} />} />
        <Route path="/m_search" element={<MobSearch/>} />
        <Route path="/m_mypage" element={<MobMypage/>} />
      </Routes>
      <Pc>
        <Footer />
      </Pc>
    </div>
  );
}

export default App;
