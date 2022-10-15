// @packages
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

// @script
import showsReducer from "./shows/showsSlice";

const middleware = [thunk, logger];

export const store = configureStore({
  reducer: {
    schedules: showsReducer,
  },
  middleware,
  devTools: true,
});
