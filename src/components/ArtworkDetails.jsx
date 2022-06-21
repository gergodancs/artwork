import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { artworkActions } from "../store/artworks-slice";

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
    <div>
      <ul>
        <li>{details.title}</li>
        <li>{details.date_display}</li>
        <li>{details.artwork_type_title}</li>
        <li>{details.artist_title}</li>
        <li>
          <img src={imgUrl} alt="pics" />
        </li>
      </ul>
      <button onClick={addFav}>Favourite</button>
    </div>
  );
};

export default ArtworkDetails;
