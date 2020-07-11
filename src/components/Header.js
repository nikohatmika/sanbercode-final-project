import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import logo from "../images/logo.png";
import { filterStory } from "../redux/storySlice";

// custom hooks to get previous state
function usePrevious(value) {
  const ref = useRef;
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Header() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  const prevState = usePrevious({ filter });

  // use effect to get state changes
  useEffect(() => {
    if (prevState && prevState.filter !== filter) {
      dispatch(filterStory(filter));
    }
  }, [filter]);

  return (
    <div className="header-container">
      <div className="d-flex">
        <img src={logo} alt="logo" width="50px" />
        <p className="title ml-3">Amaterasu Stories</p>
      </div>

      <div className="navigation my-auto">
        <label>
          Filter Category:
          <br />
          <select
            name="category"
            className="filter"
            value={filter}
            onChange={(e) => {
              console.log("select", e.target);
              setFilter(e.target.value);
            }}
          >
            <option value="all"> All </option>
            <option value="food"> Food </option>
            <option value="sport"> Sport </option>
            <option value="travel"> Travel </option>
          </select>
        </label>
        <a href="/">Home</a>
        <a href="/stories">Stories</a>
        <a href="/post-story">Post Story</a>
      </div>
    </div>
  );
}

export default Header;
