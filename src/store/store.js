import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    },
})