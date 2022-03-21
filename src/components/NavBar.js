import React, { Component } from "react"
import '../NavBar.css'
import logo from '../imagenes/logo.png'
import CartWidget from "./CartWidget";


function NavBar() {
  return (
    <div className="nav">
      <img src={logo}></img>
      <h1 className="">Titulo E-commerce</h1>
      <nav>
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
        <a href="#">link 4</a>
        <a href="#">link 5</a>
        <a href="#">link 6</a>
      </nav>
      <div className="cart-container">
            <a href="#">
                <CartWidget className="carro" />
            </a>
      </div>
    </div>
  );
}

export default NavBar;