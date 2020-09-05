import React from "react";
import Home from "./Home";
import ContactPage from "./ContactPage";
import About from "./About";
import Page from "./Page";
import ShowPosts from "../Blog/ShowPosts.jsx";

const Main = () => {
  return (
    <div>
      <Home />
      <div className="container">
        <Page />
        <hr />
        <hr />
        <ShowPosts />
        <About />
        <ContactPage />
      </div>
    </div>
  );
};

export default Main;
