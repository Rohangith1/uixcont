import { configureStore } from "@reduxjs/toolkit";
import ucontReducer from '../features/ucont/ucontSlice'


const store = configureStore({
    reducer: {
        ucontApp:ucontReducer,
    }
});

export default store;