import React from "react";
import { useSelector } from "react-redux";
import { selectStories } from "../redux/postSlice";
import StoriesList from "../components/StoryList";
import { parseJSON } from "jquery";

function Stories() {
  const storiesfromReducer = useSelector(selectStories);
  const storiesFromLocalStorage = parseJSON(localStorage.getItem("story"));

  // decide if stories from local storage is null then use from reducer as an initial state
  const stories = storiesFromLocalStorage || storiesfromReducer;

  return (
    <div>
      <h1 className="text-danger">Stories . . .</h1>

      {/* mapping component stories list */}
      {stories.map((story) => (
        <StoriesList story={story} />
      ))}
    </div>
  );
}

export default Stories;
