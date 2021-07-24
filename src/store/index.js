import { configureStore } from "@reduxjs/toolkit";

import hiddenReducer from "./hiddenSlice";
import themeReducer from "./themeSlice";
import hoverLocationReducer from "./hoverLocationSlice";

const store = configureStore({
  reducer: {
    hidden: hiddenReducer,
    theme: themeReducer,
    hoverLocation: hoverLocationReducer,
  },
});

export default store;
