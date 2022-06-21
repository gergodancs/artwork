import React from "react";
import { useSelector } from "react-redux";

const ArtworkDetails = () => {
  const details = useSelector((state) => state.artwork.details);
  const imgUrl = useSelector((state) => state.artwork.imageUrl);

  console.log(imgUrl);

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
    </div>
  );
};

export default ArtworkDetails;
