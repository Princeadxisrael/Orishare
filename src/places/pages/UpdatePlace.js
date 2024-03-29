import React, { useEffect, useState } from "react"; //UseEffect to manage mutations and ApI calls
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/UIElements/util/validators";
import "./PlaceForm.css";

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
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = Places.find((p) => p.id === placeId);
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find Place</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a description(Min. of 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.value}
      />
      <Button type="submit" disabled={!formState.isValid}>
        {" "}
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
