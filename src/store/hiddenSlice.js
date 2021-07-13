import { createSlice } from "@reduxjs/toolkit";

const hiddenSlice = createSlice({
  name: "hidden",
  initialState: {
    home: false,
    about: true,
  },
  reducers: {
    hideHome(state) {
      state.home = true;
    },
    unhideHome(state) {
      state.home = false;
    },

    hideAbout(state) {
      state.about = true;
    },

    unhideAbout(state) {
      state.about = false;
    },
    // hide(state, action) {
    //   const { page } = action.payload;
    //   console.log("PAGE HIDE:", page);
    //   console.log("HIDE BOOL:", !state[page]);
    //   if (!state[page]) {
    //     state[page] = true;
    //   }
    // },
    // unhide(state, action) {
    //   const { page } = action.payload;
    //   console.log("PAGE UNHIDE:", page);
    //   console.log("UNHIDE BOOL:", state[page]);
    //   if (state[page]) {
    //     state[page] = false;
    //   }
    // },
  },
});

export const hiddenActions = hiddenSlice.actions;

export default hiddenSlice.reducer;
