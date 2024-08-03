import { configureStore } from "@reduxjs/toolkit";
import ucontReducer from '../features/ucont/ucontSlice'


const store = configureStore({
    reducer: {
        ucountApp:ucontReducer,
    }
});

export default store;