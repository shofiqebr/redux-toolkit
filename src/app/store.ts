import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter-slice';
import counterSlice from "../features/counter/counter-slice";

export const store = configureStore({
    reducer: { counterReducer},
    
})