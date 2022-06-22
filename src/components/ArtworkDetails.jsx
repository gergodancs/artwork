import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { artworkActions } from "../store/artworks-slice";
import "./styles/details.css";

const ArtworkDetails = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.artwork.details);
  const imgUrl = useSelector((state) => state.artwork.imageUrl);
  const favs = useSelector((state) => state.artwork.favourites);

  const addFav = () => {
    dispatch(
      artworkActions.addFavourites({
        id: details.id,
        title: details.title,
        date: details.date_display,
        type: details.artwork_type_title,
        img: imgUrl,
      })
    );
  };

  return (
    <div className="details__container">
      <ul>
        <li>Title: {details.title}</li>
        <li>Date: {details.date_display}</li>
        <li>Type: {details.artwork_type_title}</li>
        <li>Artist: {details.artist_title}</li>
        <li>
          <img src={imgUrl} alt="pics" />
        </li>
      </ul>
      <button onClick={addFav}>Favourite</button>
    </div>
  );
};

export default ArtworkDetails;
