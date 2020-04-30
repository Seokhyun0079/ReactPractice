import React from "react";
import "./App.css";
import Menu from "./components/Memu";
import { Route } from "react-router-dom";
import BluePage from "./pages/BluePage";
import RedPage from "./pages/RedPage";
import UsersPage from "./pages/UsersPage";

console.log("App.js");
function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
}

export default App;
