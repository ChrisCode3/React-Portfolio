import React from "react";
import { Link } from "react-router-dom";

import image6 from "./photographyPorfolio/000010890004.jpg";
export default function Header() {
  return (
    <header>
      <h1>Hi,</h1>
      <br></br>
      
      <em>i'm</em>
      <br></br>
      <br></br>
      <h2> Chris </h2>
      <div className="search">
       
       <img id="headshot"
         src = {image6} width={500} height={500}
         alt="search"
       />
     </div>
      <Link to="/about">
        <button className="btn"> Read more..</button>
      </Link>
    </header>
  );
}


