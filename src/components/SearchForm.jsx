import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtworks } from "../store/artworks-slice";
import { artworkActions } from "../store/artworks-slice";
import { Link } from "react-router-dom";
import "./styles/searchbar.css";

const SearchForm = () => {
  const [enteredText, setEnteredText] = useState("");
  const dispatch = useDispatch();

  const numofArts = useSelector((state) => state.artwork.numberOfArts);
  const page = useSelector((state) => state.artwork.page);

  const selectHandler = (e) =>
    dispatch(artworkActions.selectNumOfArts(e.target.value));

  useEffect(() => {
    if (enteredText.length < 3) return;
    else {
      dispatch(fetchArtworks(enteredText, page, numofArts));
    }
  }, [dispatch, enteredText, page, numofArts]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(fetchArtworks(enteredText, page, numofArts));
  };
  return (
    <div className="search__bar">
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setEnteredText(e.target.value)}
          value={enteredText}
          type="text"
          placeholder="search items"
        />
        <label htmlFor="pieces" />
        <select onChange={selectHandler} value={numofArts} id="pieces">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        <button type="submit">
          <Link to="/results">Search</Link>
        </button>
        <button type="button">
          <Link to="/favourites">Favs</Link>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
