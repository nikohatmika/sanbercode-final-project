import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Stories, PostStories, About, FAQ } from "./containers";
import "./App.css";

function App() {
  return (
    <Router>
      <Header location={useLocation} />
      <div className="bg-body">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
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
      <Footer />
    </Router>
  );
}

export default App;
