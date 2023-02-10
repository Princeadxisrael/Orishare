import React from "react";
import Card from "../../shared/components/UIElements/Card";

import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0)
    return (
      <Card>
        <div className="place-list center">
          <h2>No Place found. Try Creating One?</h2>
          <button>Create Place</button>
          <button>Share Place</button>
        </div>
      </Card>
    );
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
