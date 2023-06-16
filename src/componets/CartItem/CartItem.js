import React from 'react';

const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div className="cart-item">
      <span>{name}</span>
      <span>$ {price}</span>
      <span>Cantidad: {quantity}</span>
    </div>
  );
};

export default CartItem;
