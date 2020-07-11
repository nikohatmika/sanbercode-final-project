import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="pt-5">
          <h1 className="text-white text-center">
            Welcome to Amaterasu Stories
          </h1>
          <h3 className="text-white text-center">
            Here you can post your own story and read everyones stories
          </h3>
          <div className="pt-2 d-flex justify-content-center">
            <button className="btn btn-danger btn-outline-dark mx-2">
              <Link to="/stories" className="text-white">
                Read Stories
              </Link>
            </button>
            <button className="btn btn-danger btn-outline-dark mx-2">
              <Link to="/post-story" className="text-white">
                Post Story
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
