import { configureStore } from "@reduxjs/toolkit";

import hiddenReducer from "./hiddenSlice";

const store = configureStore({
  reducer: {
    hidden: hiddenReducer,
  },
});

export default store;
