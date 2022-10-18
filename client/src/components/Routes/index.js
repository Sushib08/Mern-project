import React from "react";
// import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";
import Navbar from "../Navbar";

function index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/profil">
          <Profil />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
        {/* <Route path="*" element={<Navigate to="/" replace />}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}
export default index;
