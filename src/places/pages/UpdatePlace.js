import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/UIElements/util/validators";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = Places.find((p) => p.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find Place</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter input"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a description(Min. of 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        {" "}
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
