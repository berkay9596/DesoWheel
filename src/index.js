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
import HomePage from "./Layouts/HomePage";
import Circle3 from "./Layouts/Circle3";
import TopBar from "./Components/TopBar";
import LikeInput from "./Layouts/LikeInput";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RepostInput from './Layouts/RepostInput'
import Roadmap from "./Layouts/Roadmap";
import WhatIsDesoWheel from "./Layouts/WhatIsDesoWheel";
import Contact from "./Layouts/Contact";
import Footer from './Components/Footer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ position: "fixed", top: "0", width: "100%" }}>
          <TopBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/wheel" element={<Circle3 />}></Route>
          <Route path="/like" element={<LikeInput />}></Route>
          <Route path="/repost" element={<RepostInput />}></Route>
          <Route path="/roadmap" element={<Roadmap />}></Route>
          <Route path="/desowheel" element={<WhatIsDesoWheel />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
        <ToastContainer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
