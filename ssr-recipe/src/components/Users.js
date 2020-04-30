import React from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  console.log("Users.js User Rander!");
  if (!users) return null;
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
