import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";

//css
import './App.css';

//components
import Header from "./components/header/Header"
import Footer from "./components/footer"

//component
import Cart from "./pages/cart/Cart";

//pages
import MainPage from "./pages/mainPage/MainPage"
import DetailPage from './pages/detailPage/DetailPage';

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
          <Header/>
          <Routes>
            <Route path="/" element={<MainPage items={items} />} />
            <Route path="detail/:id" element={<DetailPage items={items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
