import { Route, Routes } from "react-router-dom";
import ArtworkDetails from "./components/ArtworkDetails";
import ArtworkList from "./components/ArtworkList";
import Favourites from "./components/Favourites";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="container">
      <Landing>
        <Routes>
          <Route path="/details" element={<ArtworkDetails />} />
          <Route path="/results" element={<ArtworkList />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Landing>
    </div>
  );
}

export default App;
