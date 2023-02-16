import './App.css';
import React, { useEffect } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import Header from "./components/header/Header"
import MainPage from "./pages/mainPage/MainPage"
import AboutPage from './pages/aboutPage/AboutPage';


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="detail" element={<AboutPage />}/>
        </Routes>
      </div>

    </React.Fragment>
  );
}

export default App;
