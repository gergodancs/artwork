import React, { useState, useCallback } from "react";
import { useEffect } from "react";
//import { Link } from "react-router-dom";

const Header = () => {
  const [enteredText, setEnteredText] = useState("");
  const [numberOfArt, setNumberOfArt] = useState(25);
  const [page, setPage] = useState(1);
  const [artwork, setArtworks] = useState([]);

  let url = `https://api.artic.edu/api/v1/artworks/search?q=${enteredText}&page=${page}&limit=${numberOfArt}`;

  const fetchArtworks = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArtworks(data));
  }, [url]);

  useEffect(() => {
    fetchArtworks();
  }, [fetchArtworks, page]);

  const selectHandler = (e) => setNumberOfArt(e.target.value);

  const decrementPage = () => {
    if (page === 1) return;
    else {
      console.log(artwork);
      return setPage(page - 1);
    }
  };
  const incrementPage = () => setPage(page + 1);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchArtworks();
    console.log(artwork);
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
        <select onChange={selectHandler} value={numberOfArt} id="pieces">
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
    </div>
  );
};

export default Header;
