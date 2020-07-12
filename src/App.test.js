import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Header, Footer, StoryList } from "./components";
import { About, FAQ, Home, PostStories, Stories } from "./containers";

test("Header", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/amaterasu stories/i);
  expect(linkElement).toBeInTheDocument();
});

test("Footer", () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/amaterasu stories/i);
  expect(linkElement).toBeInTheDocument();
});

test("StoryList", () => {
  const { getByText } = render(<StoryList />);
  const linkElement = getByText(/food/i);
  expect(linkElement).toBeInTheDocument();
});

test("About", () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/amaterasu stories/i);
  expect(linkElement).toBeInTheDocument();
});

test("FAQ", () => {
  const { getByText } = render(<FAQ />);
  const linkElement = getByText(/niko febri hatmika/i);
  expect(linkElement).toBeInTheDocument();
});

test("Home", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/amaterasu stories/i);
  expect(linkElement).toBeInTheDocument();
});

test("Post Story", () => {
  const { getByText } = render(<PostStories />);
  const linkElement = getByText(/post your story/i);
  expect(linkElement).toBeInTheDocument();
});

test("Stories", () => {
  const { getByText } = render(<Stories />);
  const linkElement = getByText(/stories/i);
  expect(linkElement).toBeInTheDocument();
});
