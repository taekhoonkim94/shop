import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        addProductQuantity: (state, action) => {
            const product = state.find(product => product.id === action.payload);
            product.count++;
        },
        addProduct: (state, action) => {
            const duplicate = state.find(product => product.id === action.payload.id);
            if (!duplicate) {
                return [...state, action.payload]
            } else {
                duplicate.count++;
            }
        }
    }
})

export const { addProductQuantity, addProduct } = cart.actions;

export default cart;