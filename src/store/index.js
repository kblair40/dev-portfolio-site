import { configureStore } from "@reduxjs/toolkit";

import hiddenReducer from "./hiddenSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    hidden: hiddenReducer,
    theme: themeReducer,
  },
});

export default store;
