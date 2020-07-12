import React, { Component } from "react";
import { connect } from "react-redux";
import { postStory } from "../redux/storySlice";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.inputUser = React.createRef();
    this.inputCategory = React.createRef();
    this.inputTitle = React.createRef();
    this.inputStory = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { history, selectStories, postStory } = this.props;
    const { inputUser, inputTitle, inputStory, inputCategory } = this;
    const id = selectStories.lastId + 1;

    // dispatching to reducer
    postStory({
      id,
      title: inputTitle.current.value,
      category: inputCategory.current.value,
      body: inputStory.current.value,
      user: inputUser.current.value,
    });
    // after submit redirect to stories
    history.push("/stories");
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1 className="red-1">Post Your Story</h1>
        <form className="ml-2" onSubmit={this.onSubmit}>
          <label>
            Name:
            <br />
            <input name="name" type="text" ref={this.inputUser} required />
          </label>

          <br />
          <label>
            Category:
            <br />
            <select name="category" ref={this.inputCategory} required>
              <option value="food"> Food </option>
              <option value="sport"> Sport </option>
              <option value="travel"> Travel </option>
            </select>
          </label>

          <br />
          <label>
            Title:
            <br />
            <input name="title" type="text" ref={this.inputTitle} required />
          </label>

          <br />
          <label>
            Story:
            <br />
            <textarea name="story" rows={5} ref={this.inputStory} required />
          </label>

          <br />
          <button className="btn btn-danger btn-outline-dark" type="submit">
            <p className="text-white m-0">Submit</p>
          </button>
        </form>
      </div>
    );
  }
}

// get the reducers state to props
const mapStateToProps = (state) => ({
  selectStories: state.story,
});

export default connect(mapStateToProps, { postStory })(withRouter(Home));
