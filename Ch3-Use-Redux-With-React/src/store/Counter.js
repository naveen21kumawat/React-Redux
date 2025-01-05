import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counterVal: 2 },
    reducers: {
      increment: (state) => {
        state.counterVal++;
      },
      decrement: (state) => {
        state.counterVal--;
      },
      add: (state, action) => {
        state.counterVal += Number(action.payload);
      },
      subtract: (state, action) => {
        state.counterVal -= Number(action.payload);
      },
      toggle: (state, action) => {
        console.log(state, action);
      },
    },
  });
export const counterActions = counterSlice.actions;
export default counterSlice;