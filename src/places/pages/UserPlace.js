import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const Places = [
  {
    id: "p1",
    title: "Waterfalls USA",
    description: "Most beautiful waterfall in USA",
    image: "/img/waterfalls.jpg",
    address: "20W 34th st, New York, NY 10001",
    location: {
      lat: 40.74,
      lng: -73.5,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Waterfalls USA",
    description: "Most beautiful waterfall in USA",
    image: "/img/waterfalls.jpg",
    address: "20W 34th st, New York, NY 10001",
    location: {
      lat: 40.74,
      lng: -73.5,
    },
    creator: "u2",
  },
];

const UserPlace = () => {
  const userId = useParams().userId;
  const loadedPlaces = Places.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlace;
