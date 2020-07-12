import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Header } from "./components";
import { Home, Stories, PostStories } from "./containers";
import "./App.css";

function App(props) {
  return (
    <Router>
      <Header location={useLocation} />
      <div className="bg-body">
        <Switch>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/post-story">
            <PostStories />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
