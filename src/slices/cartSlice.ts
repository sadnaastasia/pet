import { createSlice } from '@reduxjs/toolkit';

export interface ProductItem {
  id: number;
  image: string;
  title: string;
  info: string;
  price: string;
  program: string[];
}

export interface CartState {
  value: number;
  cartItems: ProductItem[];
}

const initialState: CartState = {
  value: localStorage.getItem('numberOfItems')
    ? Number(localStorage.getItem('numberOfItems'))
    : 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      localStorage.setItem('numberOfItems', state.value.toString());
      return {
        ...state,
        value: state.value + 1,
        cartItems: [...state.cartItems, action.payload],
      };
    },
    deleteItem: (state, action) => {
      localStorage.setItem('numberOfItems', state.value.toString());
      return {
        ...state,
        value: state.value - 1,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
