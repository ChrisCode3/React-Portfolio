import React from "react";
import { Link } from "react-router-dom";

import image6 from "./photographyPorfolio/000010890004.jpg";
export default function Header() {
  return (
    <header>
      <h1>Hi,  <em>I'm</em>   Chris </h1>
      <Link to="/about">
        <button className="btn" padding ="100px" >  want to learn more ? </button>
      </Link>
      
      <br></br>
      <img id="headshot"
         src = {image6} width={900} height={370} 

         
         alt="search"
       />
      
      
      
 
      <br></br>
      <br></br>

      
      
    </header>
  );
}


