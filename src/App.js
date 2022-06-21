import { Route, Routes } from "react-router-dom";
import ArtworkDetails from "./components/ArtworkDetails";
//import ArtworkList from "./components/ArtworkList";
import Favourites from "./components/Favourites";
import Landing from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/details" element={<ArtworkDetails />} />

      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default App;
