import React from "react";
import "./UserList.css";
import UserItems from "./UserItems";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No User found.</h2>
      </div>
    );
  }
  return (
    <ul>
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
