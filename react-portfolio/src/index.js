import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Services from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
import SingUp from "./components/singUp";
import LogIn from "./components/login";
import Work from "./components/work";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";




ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="services" element={<Services />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="singUp" element={<SingUp />} />
        <Route path="logIn" element={<LogIn />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);