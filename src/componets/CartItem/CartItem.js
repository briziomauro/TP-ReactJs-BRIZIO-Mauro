import React from 'react';
import './CartItem.css' 

const CartItem = ({ id, name, price, quantity, }) => {
  return (
    <div className="cart-item">
      <span>{name} - </span>
      <span>PRECIO: $ {price} - </span>
      <span>Cantidad: {quantity}.</span>
    </div>
  );
};

export default CartItem; 
