import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const countTotal = props.cart.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  const onCheckout = () => {
    alert("총 금액 : ₩" + countTotal.toLocaleString("ko-KR"));
  };

  return (
    <>
      <ul className="cartList">
        {props.cart.map((c) => (
          <li key={c.id}>
            <div className="cartItem">
              <div className="cartFlex">
                <div className="cartEl">
                  <img src={`${process.env.PUBLIC_URL}/images/products/${c.id}-150w.png`} alt="" />
                </div>
                <div>
                  <div className="cartEl">
                    <p className="cartName">{c.name}</p>
                    <p className="cartName">
                      ₩{(c.price * c.quantity).toLocaleString("ko-KR")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="cartFlex">
                <div className="cartEl quantity cartFlex">
                  <button onClick={() => props.onDecrease(c.id)}>-</button>
                  <div className="qtt">{c.quantity}</div>
                  <button onClick={() => props.onIncrease(c.id)}>+</button>
                </div>
                <div className="delete">
                  <FontAwesomeIcon
                    icon={faTimes}
                    color="var(--text-color)"
                    size="lg"
                    onClick={() => props.onRemove(c.id)}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {props.cart.length >= 1 && (
        <div className="total">
          <div>총 금액 : ₩{countTotal.toLocaleString("ko-KR")}</div>
          <div>
            <button className="checkout" onClick={onCheckout}>
              checkout
            </button>
          </div>
        </div>
      )}
      {!props.cart.length && <p className="empty">장바구니가 비었네요.</p>}
    </>
  );
};

export default Cart;
