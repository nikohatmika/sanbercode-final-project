import { createSlice } from "@reduxjs/toolkit";
import initData from "../helpers/initData";
import { parseJSON } from "jquery";

// init data with localStorage if exist if not use initData from helpers
const dataFromLocalStorage = parseJSON(localStorage.getItem("story"));
const data = dataFromLocalStorage || initData;

// define lastId by the highest value
const lastId = Math.max.apply(
  Math,
  data.map(function (o) {
    return o.id;
  })
);

export const storySlice = createSlice({
  name: "story",
  initialState: {
    data,
    lastId,
    filter: "all",
    search: null,
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

    searchStory: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { postStory, filterStory, searchStory } = storySlice.actions;

export const selectStories = (state) => state.story;

export default storySlice.reducer;
