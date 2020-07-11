import React from "react";

function StoryList(props) {
  const { title, category, body, user } = props.story;
  // rendering story list
  return (
    <div className="py-3 px-3 card-story">
      <h5 className="text-primary">{title}</h5>
      <h6 className="text-success text-capitalize">{category}</h6>
      <p className="text-white m-0">{body}</p>
      <h6 className="text-success">by: {user}</h6>
    </div>
  );
}

export default StoryList;
