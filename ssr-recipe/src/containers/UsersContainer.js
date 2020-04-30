import Users from "../components/Users";
import { connect } from "react-redux";
import { getUsers } from "../modules/users";
import React from "react";
import { Preloader } from "../lib/PreloadContext";

const {useEffect} = React;

const UsersContainer = ({ users, getUsers }) => {
  console.log('UsersContainer.js');
  useEffect(() => {
    if (users) return;
    getUsers();
  }, [getUsers, users]);
  return <><Users users={users} /><Preloader resolve={getUsers}/></>;
};

export default connect(
  (state) => {
  return (
    {
    users: state.users.users,
  })
  },
  {
    getUsers,
  }
)(UsersContainer);
