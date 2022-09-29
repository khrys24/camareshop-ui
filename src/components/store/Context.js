import { createContext } from "react";

export default createContext({
  product: [],
  carts: [],
  addItem: (product) => {},
  removeProductFromCart: (product_id) => {},
  clearCart: () => {},
});
