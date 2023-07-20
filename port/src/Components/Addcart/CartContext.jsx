import React, { useState, createContext } from 'react';


// create the cartcontext using createcontext
export const CartContext = createContext();

// cartprovider wrapp the whole senario and pas the children props
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // add item to cart 
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // remove the item
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  
// subtotal
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
       
        getSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
