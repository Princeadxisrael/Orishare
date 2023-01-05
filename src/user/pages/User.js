import React from "react";
import UserList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "ul",
      name: "John Thomas",
      image:
        "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=lst_2_5d",
      locations: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default User;
