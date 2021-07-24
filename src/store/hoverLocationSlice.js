import { createSlice } from "@reduxjs/toolkit";

const hoverLocationSlice = createSlice({
  name: "hoverLocation",
  initialState: {
    mutingIsActive: false,
    hoverLocation: undefined,
    aboutIsHovered: false,
    skillsIsHovered: false,
    projectsIsHovered: false,
    courseworkIsHovered: false,
    universityIsHovered: false,
    experienceIsHovered: false,
  },
  reducers: {
    setHoverLocation(state, action) {
      console.log("ACTION:", action);
      const { id } = action.payload;
      state.hoverLocation = id;
    },
    setMutingActive(state, action) {
      const { hoverStates } = action.payload;
      // console.log("\n\n\nPAYLOAD:", hoverStates, "\n\n\n");

      if (Object.values(hoverStates).some((val) => Boolean(val))) {
        state.mutingIsActive = true;
        for (let hoverState in hoverStates) {
          if (hoverStates[hoverState]) {
            state[hoverState] = true;
            console.log(hoverState, "IS ACTIVE");
          } else {
            state[hoverState] = false;
          }
        }
      } else {
        state.mutingIsActive = false;
        for (let key in state) {
          state[key] = false;
        }
      }
    },
  },
});

export const hoverLocationActions = hoverLocationSlice.actions;

export default hoverLocationSlice.reducer;
