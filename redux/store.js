import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    clickCount: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.clickCount += 1;
    },
  },
});

export const { incrementCount } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
