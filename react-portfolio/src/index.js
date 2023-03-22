import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Photography from "./components/Photography";
import About from "./components/about";
import Contact from "./components/contact";
import Coding from "./components/coding";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";




ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="Photography" element={<Photography/>} />
        <Route path="Coding" element={<Coding />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
    
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);