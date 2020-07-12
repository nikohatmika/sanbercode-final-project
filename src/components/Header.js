import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import logo from "../images/logo.png";
import { filterStory, searchStory } from "../redux/storySlice";

// custom hooks to get previous state
function usePrevious(value) {
  const ref = useRef;
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Header({ location }) {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState(null);
  const prevState = usePrevious({ filter, search });

  // use effect to get state changes
  useEffect(() => {
    if (prevState && prevState.filter !== filter) {
      dispatch(filterStory(filter));
    }
  }, [dispatch, filter, prevState]);

  useEffect(() => {
    if (prevState && prevState.search !== search) {
      dispatch(searchStory(search));
    }
  }, [dispatch, prevState, search]);

  return (
    <div className="header-container">
      <div className="d-flex">
        <img src={logo} alt="logo" width="62px" />
        <p className="title ml-3">Amaterasu Stories</p>
      </div>

      <div className="navigation my-auto">
        {/* only show when path is /stories */}
        {location().pathname === "/stories" && (
          <>
            <label>
              Filter Category:
              <br />
              <select
                name="category"
                className="filter"
                value={filter}
                onChange={(e) => {
                  // console.log("select", e.target.value);
                  setFilter(e.target.value);
                }}
              >
                <option value="all"> All </option>
                <option value="food"> Food </option>
                <option value="sport"> Sport </option>
                <option value="travel"> Travel </option>
              </select>
            </label>
            <label>
              Search Story:
              <br />
              <input
                name="search"
                className="filter"
                type="text"
                placeholder="search.."
                value={search}
                onChange={(e) => {
                  // console.log("search", e.target.value);
                  setSearch(e.target.value);
                }}
              ></input>
            </label>
          </>
        )}

        <a href="/">Home</a>
        <a href="/stories">Stories</a>
        <a href="/post-story">Post Story</a>
      </div>
    </div>
  );
}

export default Header;
