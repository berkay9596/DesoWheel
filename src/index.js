import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RepostInput from "./pages/RepostInput";
import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";
import Circle3 from "./pages/Circle3";
import LikeInput from "./pages/LikeInput";

import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar/Navbar";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="header-bg-2">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/wheel" element={<Circle3 />}></Route>
          <Route path="/like" element={<LikeInput />}></Route>
          <Route path="/repost" element={<RepostInput />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
        <ToastContainer />
   
        <Footer />
     
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
