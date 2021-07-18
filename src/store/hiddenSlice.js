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
    scrollingEnabled: true,
  },
  reducers: {
    hideWorkUnhideAbout(state) {
      state.work = true;
      state.about = false;
      state.currentPage = "about";
    },
    hideAboutUnhideHome(state) {
      state.about = true;
      state.home = false;
      state.currentPage = "home";
    },
    hideAboutUnhideWork(state) {
      state.about = true;
      state.work = false;
      state.currentPage = "work";
    },
    hideHomeUnhideAbout(state) {
      state.home = true;
      state.about = false;
      state.currentPage = "about";
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
    disableScrolling(state) {
      state.scrollingEnabled = false;
    },
    enableScrolling(state) {
      state.scrollingEnabled = true;
    },
  },
});

export const hiddenActions = hiddenSlice.actions;

export default hiddenSlice.reducer;
