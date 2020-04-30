import React from "react";
import UsersContainer from "../containers/UsersContainer";
import { Route } from "react-router-dom";
import UserContainer from "../containers/UserContainer";


const UsersPage = () => {
  console.log('UsersPage.js');
  return (
    <>
      <UsersContainer />
      <h1>이것도 너프해보시지!</h1>
      <Route
      path ="/users/:id"
      render={({match})=> <UserContainer id={match.params.id}/>}
      />   
    </>
  );
};

export default UsersPage;
