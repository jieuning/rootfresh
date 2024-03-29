import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from './store/store';

// 리덕스 스토리지에 데이터 저장
// 리프레시해도 장바구니 데이터 고정
export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <ScrollToTop/>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);

