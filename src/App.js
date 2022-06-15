import { Route, Routes } from "react-router-dom";
import ArtworkDetails from "./components/ArtworkDetails";
//import ArtworkList from "./components/ArtworkList";
import Favourites from "./components/Favourites";
import Header from "./components/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/artworkdetails" element={<ArtworkDetails />} />

      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default App;
