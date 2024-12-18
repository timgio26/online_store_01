import { createSlice, configureStore } from "@reduxjs/toolkit";

//slicer

const initState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      return state.filter((each) => each.itemid !== action.payload);
    },
    addItemQty(state, action) {
      const item = state.find((each) => each.itemid == action.payload);
      item.qty = item.qty + 1;
    },
    redItemQty(state, action) {
      const item = state.find((each) => each.itemid == action.payload);
      if (item.qty === 1) {
        return state.filter((each) => each.itemid !== action.payload);
      }
      item.qty = item.qty - 1;
    },
  },
});

export const { addItem, addItemQty, redItemQty, deleteItem } =
  cartSlice.actions;

export const getCart = (state) => {
  return state.cart;
};

////store

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
