import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/favs.css";
import { artworkActions } from "../store/artworks-slice";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.artwork.favourites);
  const removeFav = (id) => {
    dispatch(artworkActions.replaceFavourite(id));
  };
  return (
    <div className="favs__container">
      {favourites.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>Title: {item.title}</li>
              <li>Date: {item.date}</li>
              <li>Type: {item.type}</li>

              <li>
                <img src={item.img} alt="pics" />
              </li>
              <li>
                <button onClick={() => removeFav(item.id)}>Remove</button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
