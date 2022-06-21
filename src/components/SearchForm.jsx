import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtworks } from "../store/artworks-slice";
import { artworkActions } from "../store/artworks-slice";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [enteredText, setEnteredText] = useState("");
  const dispatch = useDispatch();
  //const results = useSelector((state) => state.artwork.results);
  const numofArts = useSelector((state) => state.artwork.numberOfArts);
  const page = useSelector((state) => state.artwork.page);

  const selectHandler = (e) =>
    dispatch(artworkActions.selectNumOfArts(e.target.value));

  const decrementPage = () => dispatch(artworkActions.decrementPage());

  const incrementPage = () => dispatch(artworkActions.incerementPage());

  useEffect(() => {
    if (enteredText.length < 3) return;
    dispatch(fetchArtworks(enteredText, page, numofArts));
  }, [dispatch, enteredText, page, numofArts]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchArtworks(enteredText, page, numofArts));
    console.log(enteredText);
  };
  return (
    <div>
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
        <button>Search</button>
      </form>
      <button onClick={decrementPage}>vissza</button>
      <button onClick={incrementPage}>elore</button>
      <Link to="/favourites">Favs</Link>
    </div>
  );
};

export default SearchForm;
