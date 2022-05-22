import React, { useState, useRef, useEffect } from "react";

import Cart from "./cart/Cart";

import "../css/Cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);
  const cartBtnRef = useRef(null);

  useEffect(() => {
    if (props.cart.length) setCartOpen(true);
  }, [props.cart]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        !cartBtnRef.current.contains(event.target)
      ) {
        setCartOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const cartOnClick = () => {
    if (cartOpen) setCartOpen(false);
    else setCartOpen(true);
  };

  return (
    <header className="sec header">
      <div className="head">
        <div className="hFlex">
          <div className="logo">
            <a href="./">SOONEESHOP</a>
          </div>
          <div className="cartMenu">
            <span className="tooltip" onClick={cartOnClick} ref={cartBtnRef}>
              <span className="fa-layers fa-fw cart">
                <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
                <span className="fa-layers-counter qnt">
                  {props.cart.length}
                </span>
              </span>
            </span>
            {cartOpen ? (
              <span className="cartTooltip" ref={cartRef}>
                <Cart
                  cart={props.cart}
                  onDecrease={props.onDecrease}
                  onIncrease={props.onIncrease}
                  onRemove={props.onRemove}
                  key={props.cart.id}
                />
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
