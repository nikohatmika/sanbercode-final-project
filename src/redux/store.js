import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./storySlice";

export default configureStore({
  reducer: {
    story: storyReducer,
  },
});
