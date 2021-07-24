import { createSlice } from "@reduxjs/toolkit";

const hoverLocationSlice = createSlice({
  name: "hoverLocation",
  initialState: {
    mutingIsActive: false,
    hoverLocation: undefined,
  },
  reducers: {
    setHoverLocation(state, action) {
      console.log("ACTION:", action);
      const { id } = action.payload;
      state.hoverLocation = id;
    },
  },
});

export const hoverLocationActions = hoverLocationSlice.actions;

export default hoverLocationSlice.reducer;
