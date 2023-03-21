import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <h1>Hi,</h1>
      <br></br>
      
      <em>i'm</em>
      <br></br>
      <br></br>
      <h2> Chris</h2>
      <h4>Please join in in my adventure to learn coding</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sequi
        necessitatibus asperiores officia eos tenetur a voluptatem ducimus, ut
        quisquam ad, quia et minima tempora excepturi cumque earum, laudantium
        ipsum.
      </p>
      <Link to="/about">
        <button className="btn"> Read more..</button>
      </Link>
    </header>
  );
}