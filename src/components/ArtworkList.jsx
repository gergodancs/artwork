import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { fetchDetails } from "../store/artworks-slice";
import { artworkActions } from "../store/artworks-slice";
import "./styles/artworklist.css";
const ArtworkList = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.artwork.page);
  const results = useSelector((state) => state.artwork.results);
  const getDetails = (id, imgId) => {
    dispatch(
      artworkActions.getImage(
        `https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`
      )
    );
    dispatch(fetchDetails(id));
  };
  const decrementPage = () => dispatch(artworkActions.decrementPage());

  const incrementPage = () => dispatch(artworkActions.incerementPage());

  return (
    <div className="artworks_wrapper">
      <div className="pagination">
        <button onClick={decrementPage}>Back</button>
        <span>{page}</span>
        <button onClick={incrementPage}>Next</button>
      </div>
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
    </div>
  );
};

export default ArtworkList;
