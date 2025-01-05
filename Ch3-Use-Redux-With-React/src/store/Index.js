// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

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
      state.counterVal+= Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal-= Number(action.payload);

    },
    toggle: (state, action) => {
      console.log(state, action);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default counterStore;

















/*
const INITIAL_VALUE = { counter: 1, privacy: false };
const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { ...store, counter: store.counter + 1 };
    return newStore;
  } else if (action.type === "DECREMENT") {
    newStore = { ...store, counter: store.counter - 1 };
    return newStore;
  } else if (action.type == "ADD") {
    newStore = {
      ...store,
      counter: store.counter + parseInt(action.payload.num),
    };
    return newStore;
  } else if (action.type == "SUBTRACT") {
    newStore = {
      ...store,
      counter: store.counter - parseInt(action.payload.num),
    };
    return newStore;
  } else if (action.type == "TOGGLE_PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return newStore;
}; **/
