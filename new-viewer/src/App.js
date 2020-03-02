import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPages";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
