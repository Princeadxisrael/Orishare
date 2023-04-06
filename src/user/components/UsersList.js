import React from "react";

import UserItems from "./UserItems";
import Card from "../../shared/components/UIElements/Card";

import "./UserList.css";

const UserList = (props) => {
  //checking for condition that there is no user
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No User found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItems
          key={user.id}
          id={user.id}
          name={user.name}
          locationCount={user.locations}
          image={user.image}
        />
      ))}
    </ul>
  );
};

export default UserList;
