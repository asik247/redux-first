// TextSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "Welcome to Redux"
};

const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {}
});

export default textSlice.reducer;