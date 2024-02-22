import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "auth",
  initialState: {
    name: "test-redux-name ",
    details: [],
  },
  reducers: {
    authLogin(state, action) {
      const { details } = action.payload;
      console.log("redux032 : state ===> ", details);
      state.details = details;
    },
  },
});

export const homeReducers = homeSlice.reducer;
export const homeActions = homeSlice.actions;
