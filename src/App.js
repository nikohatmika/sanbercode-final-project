import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Stories, PostStories } from "./containers";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
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
