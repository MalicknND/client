import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
// import Cart from "../Cart/Cart";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link className="link" to="/">
            MyStore
          </Link>
        </div>
        <div className="center">
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <img src="/icons/search.svg" alt="search" id="icon" />
            <div className="cartIcon">
              <img src="/icons/cart.svg" alt="cart" id="icon" />

              {/* <span>{products.length}</span> */}
            </div>
            <img src="/icons/heart.svg" alt="heart" id="icon" />
            <div className="menuIcon">
              <img
                src={open ? "/icons/close.svg" : "/icons/menu.svg"}
                alt="menu"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={open ? "menu active" : "menu"}>
        <div className="menuItem">
          <Link
            className="link"
            to="/products/1"
            onClick={() => setOpen(false)}
          >
            Women
          </Link>
        </div>
        <div className="menuItem">
          <Link
            className="link"
            to="/products/2"
            onClick={() => setOpen(false)}
          >
            Men
          </Link>
        </div>
        <div className="menuItem">
          <Link
            className="link"
            to="/products/3"
            onClick={() => setOpen(false)}
          >
            Children
          </Link>
        </div>
      </div>
      {/* {open && <Cart />} */}
    </div>
  );
};

export default Navbar;
