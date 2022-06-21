import { Route, Routes } from "react-router-dom";
import ArtworkDetails from "./components/ArtworkDetails";
//import ArtworkList from "./components/ArtworkList";
import Favourites from "./components/Favourites";
import Header from "./components/Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtworks } from "./store/artworks-slice";

function App() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.artwork.results);
  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch]);

  console.log(results);

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/artworkdetails" element={<ArtworkDetails />} />

      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default App;
