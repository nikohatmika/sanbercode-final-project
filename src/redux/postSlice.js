import { createSlice } from "@reduxjs/toolkit";
import initData from "../helpers/initData";
import { parseJSON } from "jquery";

// init data with localStorage if exist if not use initData from helpers
const story = parseJSON(localStorage.getItem("story"));

export const postSlice = createSlice({
  name: "post",
  initialState: story || initData,
  reducers: {
    postStory: (state, action) => {
      // the data is stored to local storage, because reducers refresed after changing route
      localStorage.setItem("story", JSON.stringify([action.payload, ...state]));
      state = [action.payload, ...state];
    },
  },
});

export const { postStory } = postSlice.actions;

export const selectStories = (state) => state.post;

export default postSlice.reducer;
