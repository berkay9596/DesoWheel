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
import HomePage from "./pages/HomePage";
import Circle3 from "./pages/Circle3";
import TopBar from "./components/TopBar";
import LikeInput from "./pages/LikeInput";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RepostInput from "./pages/RepostInput";
import Roadmap from "./pages/Roadmap";
import WhatIsDesoWheel from "./pages/WhatIsDesoWheel";
import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
import Posts from "./pages/Posts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const user = JSON.parse(localStorage.getItem("identityUsersV2"));
const public_key = user?.publicKey;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/wheel" element={<Circle3 />}></Route>
          <Route path="/like" element={<LikeInput />}></Route>
          <Route path="/repost" element={<RepostInput />}></Route>
          <Route path="/roadmap" element={<Roadmap />}></Route>
          <Route path="/desowheel" element={<WhatIsDesoWheel />}></Route>
          <Route
            path="/posts"
            element={public_key ? <Posts /> : <HomePage />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <ToastContainer />

        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
