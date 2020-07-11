import { createSlice } from "@reduxjs/toolkit";
import initData from "../helpers/initData";
import { parseJSON } from "jquery";

// init data with localStorage if exist if not use initData from helpers
const story = parseJSON(localStorage.getItem("story"));

export const storySlice = createSlice({
  name: "story",
  initialState: {
    data: story || initData,
    filter: "all",
  },
  reducers: {
    postStory: (state, action) => {
      // the data is stored to local storage, because reducers refresed after changing route
      localStorage.setItem(
        "story",
        JSON.stringify([action.payload, ...state.data])
      );
      state.story = [action.payload, ...state.data];
    },

    filterStory: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { postStory, filterStory } = storySlice.actions;

export const selectStories = (state) => state.story;

export default storySlice.reducer;
