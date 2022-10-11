import { createSlice } from "@reduxjs/toolkit";

const locMap = {
  aboutIsHovered: "about",
  skillsIsHovered: "skills",
  projectsIsHovered: "projects",
};

const hoverLocationSlice = createSlice({
  name: "hoverLocation",
  initialState: {
    mutingIsActive: false,
    hoverLocation: undefined,
    userIsOnMobile: false,
  },
  reducers: {
    setMutingIsActive(state, action) {
      state.mutingIsActive = action.payload.resumeIsHovered;
    },
    setHoverLocation(state, action) {
      const { hoverStates } = action.payload;

      if (Object.values(hoverStates).some((val) => Boolean(val))) {
        for (let hoverState in hoverStates) {
          if (hoverStates[hoverState]) {
            state.hoverLocation = locMap[hoverState];
          }
        }
      }
    },
    setUserIsOnMobile(state, action) {
      const { numOfTouchpoints } = action.payload;
      if (numOfTouchpoints > 0) {
        state.userIsOnMobile = true;
      }
    },
  },
});

export const hoverLocationActions = hoverLocationSlice.actions;

export default hoverLocationSlice.reducer;
