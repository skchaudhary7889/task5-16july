import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  // this state is use for count the item add in the cart
  const [totalitem, setTotalItem] = useState(0);

  //  // extract the element from context
  const { cartItems, removeFromCart, getSubtotal } = useContext(CartContext);

  //   remove function
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  //   use for count the item ,here update the state after hit on the button and use filter method
  useEffect(() => {
    setTotalItem(cartItems.filter((cartItems) => cartItems).length);
  });

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <span style={{ fontSize: "20px" }}>Add-Items:({totalitem})</span>
      {cartItems.length === 0 ? (
        <p style={{ fontSize: "15px" }}>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  style={{ marginTop: "5px" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </div>
          <p>Subtotal: ${getSubtotal()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
