import { configureStore } from "@reduxjs/toolkit";
import appNavSlice from "./appNavSlice";

const store = configureStore({
    reducer: {
        appNav : appNavSlice
    }
})
export default store;