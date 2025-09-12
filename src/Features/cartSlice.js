import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // {id, name, price, qty, image}
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }

      state.totalAmount += Number(item.price);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        state.totalAmount -= item.price * item.qty;
        state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item && item.qty > 1) {
        item.qty -= 1;
        state.totalAmount -= item.price;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
