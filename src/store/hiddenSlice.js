import { createSlice } from "@reduxjs/toolkit";

const hiddenSlice = createSlice({
  name: "hidden",
  initialState: {
    home: false,
    about: true,
    work: true,
    currentPage: "home",
    homeSlideDirection: "down",
    aboutSlideDirection: "up",
    workSlideDirection: "up",
  },
  reducers: {
    hideHome(state) {
      state.home = true;
    },
    unhideHome(state) {
      state.home = false;
      state.currentPage = "home";
    },
    hideAbout(state) {
      state.about = true;
    },
    unhideAbout(state) {
      state.about = false;
      state.currentPage = "about";
    },
    hideWork(state) {
      state.work = true;
    },
    unhideWork(state) {
      state.work = false;
      state.currentPage = "work";
    },
    setHomeDirection(state, action) {
      const { direction } = action.payload;
      state.homeSlideDirection = direction;
    },
    setAboutDirection(state, action) {
      const { direction } = action.payload;
      state.aboutSlideDirection = direction;
    },
    setWorkDirection(state, action) {
      const { direction } = action.payload;
      state.workSlideDirection = direction;
    },
  },
});

export const hiddenActions = hiddenSlice.actions;

export default hiddenSlice.reducer;
