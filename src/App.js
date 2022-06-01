import React from "react";
import { StoriesContainer } from "./containers/StoriesContainer";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <StoriesContainer />
    </>
  );
};
