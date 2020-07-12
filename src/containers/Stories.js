import React from "react";
import { useSelector } from "react-redux";
import { selectStories } from "../redux/storySlice";
import StoriesList from "../components/StoryList";
import { parseJSON } from "jquery";

function Stories() {
  const storiesfromReducer = useSelector(selectStories).data;
  const filter = useSelector(selectStories).filter;
  const search = useSelector(selectStories).search;
  const storiesFromLocalStorage = parseJSON(localStorage.getItem("story"));

  // decide if stories from local storage is null then use from reducer as an initial state
  const currentStories = storiesFromLocalStorage || storiesfromReducer;
  // console.log("stories", stories);

  // filtering stories
  const filteredStories = currentStories.filter(
    (story) => story.category === filter
  );

  // searching stories
  const searchedStories = currentStories.filter((story) =>
    story.title.toLowerCase().includes(search?.toLowerCase())
  );

  // filtering dan searching stories
  const filteredSearchedStories = currentStories
    .filter((story) => story.category === filter)
    .filter((story) =>
      story.title.toLowerCase().includes(search?.toLowerCase())
    );

  // decide which array will be displayed
  let stories;
  if (filter !== "all" && !search) {
    stories = filteredStories;
  } else if (search && filter === "all") {
    stories = searchedStories;
  } else if (filter === "all" && !search) {
    stories = currentStories;
  } else {
    stories = filteredSearchedStories;
  }

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
