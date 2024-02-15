import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 30 },
    reducers: {
        changeName: (state) => {
            state.name = 'park';
            state.age = 20;
        },
        increase: (state, action) => {
            state.age += action.payload;
        }
    }
})

export const { changeName, increase } = user.actions;

export default user;