import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { fetchDetails } from "../store/artworks-slice";
const ArtworkList = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.artwork.results);
  const details = useSelector((state) => state.artwork.details);
  const getDetails = (id) => {
    dispatch(fetchDetails(id));
  };
  console.log(details);

  return (
    <div className="results__container">
      {results.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            imgId={item.image_id}
            title={item.title}
            getDetails={getDetails}
          />
        );
      })}
    </div>
  );
};

export default ArtworkList;
