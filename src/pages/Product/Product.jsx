import React, { useState } from "react";
import "./Product.scss";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1695527081782-33e110235ade?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt="images"
            onClick={(e) => setSelectedImg(0)}
          />
          <img src={images[1]} alt="image" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="image" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>199 €</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum
          iste deleniti maiores quod aliquid, eos fugiat natus blanditiis
          reiciendis. Voluptate repudiandae repellendus earum harum ipsa quasi
          atque quo ab, similique iure nihil itaque, animi rem architecto fugit
          ratione praesentium consequuntur tempore quod aperiam maiores eum.
          Quod sequi atque illum.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className="add">
          <img src="/icons/cart.svg" alt="cart" id="icon" />
          Ajouter au panier
        </div>
        <div className="link">
          <div className="item">
            <img src="/icons/heart.svg" alt="heart" id="icon" />
            <span>Coup de coeur</span>
          </div>
          <div className="item"></div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
