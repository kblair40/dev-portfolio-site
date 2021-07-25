import { createSlice } from "@reduxjs/toolkit";

const hoverLocationSlice = createSlice({
  name: "hoverLocation",
  initialState: {
    mutingIsActive: false,
    hoverLocation: undefined,
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
            state.hoverLocation = hoverState;
          }
        }
      }
    },
  },
});

export const hoverLocationActions = hoverLocationSlice.actions;

export default hoverLocationSlice.reducer;
