import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: "privacy",
    initialState: false,
    reducers: {
      toggle: (state) => {
        console.log("hello")
        return (state = !state);
      },
    },
  });
  export default privacySlice;
export const privacyActions = privacySlice.actions;
