import './App.css';
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

//components
import Header from "./components/header/Header"

//pages
import MainPage from "./pages/mainPage/MainPage"
import DetailPage from './pages/detailPage/DetailPage';

//data
import itemData from "./data.json"


function App() {

  const [items] = useState(itemData);

  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage items={items}/>} />
          <Route path="detail/:id" element={<DetailPage items={items} />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
