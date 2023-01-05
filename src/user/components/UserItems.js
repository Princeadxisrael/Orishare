import React from "react";
import "./UserItems.css";

const UserItems = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name} />
        </div>
      </div>
    </li>
  );
};

export default UserItems;
