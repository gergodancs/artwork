import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { fetchDetails } from "../store/artworks-slice";
import { artworkActions } from "../store/artworks-slice";
const ArtworkList = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.artwork.results);
  const getDetails = (id, imgId) => {
    dispatch(
      artworkActions.getImage(
        `https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`
      )
    );
    dispatch(fetchDetails(id));
  };

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
