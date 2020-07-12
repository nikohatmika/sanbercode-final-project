import React from "react";
import { useSelector } from "react-redux";
import { selectStories } from "../redux/storySlice";
import StoriesList from "../components/StoryList";
import { parseJSON } from "jquery";

function Stories() {
  const storiesfromReducer = useSelector(selectStories).data;
  const filter = useSelector(selectStories).filter;
  const storiesFromLocalStorage = parseJSON(localStorage.getItem("story"));

  // decide if stories from local storage is null then use from reducer as an initial state
  const stories = storiesFromLocalStorage || storiesfromReducer;
  // console.log("stories", stories);

  return (
    <div>
      {/* {console.log("filter", filter)} */}
      <h1 className="red-1">Stories . . .</h1>

      {/* mapping component stories list */}
      {stories.map((story) =>
        filter !== "all" ? (
          story.category === filter && <StoriesList story={story} />
        ) : (
          <StoriesList story={story} />
        )
      )}
    </div>
  );
}

export default Stories;
