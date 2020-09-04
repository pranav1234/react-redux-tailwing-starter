import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import searchReducer from "./features/searchSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
