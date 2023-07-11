import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  cleanCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    let newTotal = 0;
    for (const item of cart) {
      newTotal += item.price * item.quantity;
    }
    setTotal(newTotal);
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, totalQuantity, addItem, removeItem, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;