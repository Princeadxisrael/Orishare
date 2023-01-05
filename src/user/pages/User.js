import React from "react";
import UserList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "ul",
      name: "John Thomas",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Frelay.dev%2Fdocs%2Fguided-tour%2Frendering%2Ffragments%2F&psig=AOvVaw2BG0yU3_-R9LiZwvTKoNmy&ust=1672756180410000&source=images&cd=vfe&ved=0CBIQ3YkBahcKEwi4-pvBjKn8AhUAAAAAHQAAAAAQBw",
      locations: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default User;
