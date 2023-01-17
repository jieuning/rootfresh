import './App.css';
import React, { useEffect } from "react";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Header from "./components/header/Header"
import MainPage from "./pages/mainPage/MainPage"
// import { Route, Routes, Link, NavLink, Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <Header />
        <MainPage />
      </div>

    </React.Fragment>
  );
}

export default App;
