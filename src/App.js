import React from "react";
import Navbar from "./components/Shared/NavbarPage";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Main from "./components/Home/Main";

import AOS from "aos";
import "aos/dist/aos.css";
import EnterPosts from "./components/Blog/EnterPosts";
function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/editposts" component={EnterPosts} exact />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
