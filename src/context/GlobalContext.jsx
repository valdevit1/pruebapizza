import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    const newCartItems = [...cartItems];
    const existingItem = newCartItems.find((item) => item.id === pizza.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCartItems.push({ ...pizza, quantity: 1 });
    }
    setCartItems(newCartItems);
  };

  const removeQuantityFromCart = (id) => {
    const updatedCartItems = cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0);

    setCartItems(updatedCartItems);
  };

  const addQuantityToCart = (id) => {
    const updatedCartItems = cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));

    setCartItems(updatedCartItems);
  };

  const deleteFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const getData = async () => {
    try {
      const res = await fetch("pizzas.json");
      const json = await res.json();
      setPizzas(json);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(pizzas);
  return (
    <GlobalContext.Provider value={{ pizzas, addToCart, removeQuantityFromCart, cartItems, addQuantityToCart, deleteFromCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
