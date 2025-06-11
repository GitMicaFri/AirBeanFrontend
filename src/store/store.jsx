import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  orderNr: null,
  eta: null,

  setOrderDetails: (orderNr, eta) => set({ orderNr, eta }),

  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find(cartItem => cartItem.title === item.title);
    if (existingItem) {
      existingItem.quantity += 1;
      console.log("Ökade antal på:", item.title, "Nytt antal:", existingItem.quantity);
      return { cart: [...state.cart] };
    }
    console.log("Lade till ny produkt:", item.title);
    return { cart: [...state.cart, { ...item, quantity: 1 }] };
  }),

  increaseQuantity: (title) => set((state) => {
    const newCart = state.cart.map(cartItem =>
      cartItem.title === title
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return { cart: newCart };
  }),

  decreaseQuantity: (title) => set((state) => {
    const newCart = state.cart
      .map(cartItem =>
        cartItem.title === title && cartItem.quantity > 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter(cartItem => cartItem.quantity > 0);
    return { cart: newCart };
  }),

  sendOrder: async (cart) => {
    try {
      const order = cart.map(cartItem => ({
        name: cartItem.title,
        price: cartItem.price,
        quantity: cartItem.quantity,
      }));
      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ details: { order } }),
        }
      );
      const data = await response.json();
      set({ orderNr: data.orderNr, eta: data.eta });
    } catch (error) {
      console.error("Error:", error);
    }
  },

  clearCart: () => set({ cart: [] }),
}));

export default useStore;
