import { createSlice } from '@reduxjs/toolkit';
import { productArray } from '../data/data';

export interface ProductItem {
  id: number;
  image: string;
  title: string;
  info: string;
  price: string;
  program: string[];
}

export interface ButtonActivity {
  id: number;
  isActive: boolean;
}

export interface CartState {
  value: number;
  cartItems: ProductItem[];
  buttonsActivity: ButtonActivity[];
}

const buttonsActivityArray = productArray.map((item) => {
  return {
    id: item.id,
    isActive: true,
  };
});

const initialState: CartState = {
  value: localStorage.getItem('numberOfItems')
    ? Number(localStorage.getItem('numberOfItems'))
    : 0,
  cartItems: localStorage.getItem(`cartItems`)
    ? JSON.parse(localStorage.getItem(`cartItems`)!)
    : [],
  buttonsActivity: buttonsActivityArray,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      localStorage.setItem('numberOfItems', (state.value + 1).toString());
      localStorage.setItem(
        'cartItems',
        `${JSON.stringify([...state.cartItems, action.payload])}`
      );
      localStorage.setItem(`${action.payload.id}numberOfItems`, 'false');
      return {
        ...state,
        value: state.value + 1,
        cartItems: [...state.cartItems, action.payload],
        buttonsActivity: state.buttonsActivity.map((item) =>
          item.id === action.payload.id
            ? { ...item, isActive: !item.isActive }
            : item
        ),
      };
    },
    deleteItem: (state, action) => {
      localStorage.setItem('numberOfItems', (state.value - 1).toString());
      localStorage.setItem(
        'cartItems',
        `${JSON.stringify(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        )}`
      );
      localStorage.setItem(`${action.payload.id}numberOfItems`, 'true');
      return {
        ...state,
        value: state.value - 1,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        buttonsActivity: state.buttonsActivity.map((item) =>
          item.id === action.payload.id
            ? { ...item, isActive: !item.isActive }
            : item
        ),
      };
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
