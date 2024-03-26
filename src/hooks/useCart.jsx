import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

//creamos nuestro Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart debe ser usado desntro de un CartProvider");
  }

  return context;
};
