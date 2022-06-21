import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import ArtworkList from "./ArtworkList";
//import { Link } from "react-router-dom";

const Header = () => {
  const [enteredText, setEnteredText] = useState("");
  const [numberOfArt, setNumberOfArt] = useState(25);
  const [page, setPage] = useState(1);
  const [artwork, setArtworks] = useState([]);

  let url = `https://api.artic.edu/api/v1/artworks/search?q=${enteredText}&page=${page}&limit=${numberOfArt}&fields=id,title,image_id,thumbnail`;

  const fetchArtworks = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data?.data);
      });
  }, [url]);

  useEffect(() => {
    if (!enteredText.length || enteredText.length < 3) {
      return;
    } else {
      fetchArtworks();
    }
  }, [fetchArtworks, page, enteredText]);

  const selectHandler = (e) => setNumberOfArt(e.target.value);

  const decrementPage = () => {
    if (page === 1) return;
    else {
      return setPage(page - 1);
    }
  };
  const incrementPage = () => setPage(page + 1);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchArtworks();
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
      <div className="results__container">
        {artwork &&
          artwork.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img
                  src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                  alt=""
                />
                <h5>{item.title}</h5>
                <button>Add to favourite</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Header;
