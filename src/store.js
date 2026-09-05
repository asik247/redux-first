import { configureStore } from "@reduxjs/toolkit";
import TextSlice from "./TextSlice/TextSlice";
// import { counterSlice } from "./Slices/CoutnSlice";

export default configureStore({
    reducer:{
        textSlice:TextSlice,
        // counterSlice:counterSlice
    }
})