import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  value: number;
}

const initialState: CartState = {
  value: localStorage.getItem('numberOfItems')
    ? Number(localStorage.getItem('numberOfItems'))
    : 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem('numberOfItems', state.value.toString());
      console.log(Number(localStorage.getItem('numberOfItems')));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem('numberOfItems', state.value.toString());
      console.log(Number(localStorage.getItem('numberOfItems')));
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
