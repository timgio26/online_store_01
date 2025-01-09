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
    resetCart(state,action){
      return initState;
    }
  },
});

export const { addItem, addItemQty, redItemQty, deleteItem,resetCart} =
  cartSlice.actions;

export const getCart = (state) => {
  return state.cart;
};

export const getCartValue = (state) => {
  return state.cart.reduce((acum,curr)=>acum+(curr.qty*curr.unitPrice),0);
};

export function getCartQty(state){
  return state.cart.reduce((acum,curr)=>acum+curr.qty,0)
}

////store

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
